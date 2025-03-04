<template>
    <FieldSelect v-if="field"
                 :id="id"
                 v-model="thisModelValue"
                 :field="field"
                 :label="label"
                 :options="options"
                 :multiple="multiple"
                 :placeholder="placeholder"
                 :disabled="disabled"
                 :loading="loading"
                 @update:modelValue="$emit('update:modelValue', $event)"
                 @search-change="search"
    ></FieldSelect>
    <VueSelect v-else
               :id="id"
               v-model="thisModelValue"
               :label="label"
               :options="options"
               :multiple="multiple"
               :placeholder="placeholder"
               :disabled="disabled"
               :loading="loading"
               :show-no-options="false"
               @update:modelValue="$emit('update:modelValue', $event)"
               @search-change="search"
    >
        <template #noResult>No Results Found</template>
    </VueSelect>
</template>

<script setup>
import VueSelect from "vue-multiselect";
import FieldSelect from "./FieldSelect.vue";
import {onMounted, ref, watch} from "vue";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {},
    url: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        default() {
            return Math.random().toString(36).slice(2);
        }
    },
    multiple: {
        type: Boolean,
        default() {
            return false;
        },
    },
    field: {
        type: String,
    },
    label: {
        type: String,
        required: true,
    },
    searchColumns: {
        type: Array,
        default() {
            return [];
        }
    },
    filters: {
        type: Array,
    },
    relations: {
        type: Array,
    },
    limit: {
        type: Number,
        default: 50,
    },
    preload: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        default() {
            return 'Select';
        }
    },
    disabled: {
        default() {
            return false;
        }
    }
})

const thisModelValue = ref(props.modelValue);

watch(() => props.modelValue, (value) => {
    thisModelValue.value = value;
})

const options = ref([]);

const loading = ref(false);

onMounted(() => {
    let searchFilters = [];
    if(props.modelValue) {
        const column = props.field ?? 'id';
        let value = props.modelValue.hasOwnProperty(column) ? props.modelValue[column] : props.modelValue;
        value = Array.isArray(value) && value[0] && value[0].hasOwnProperty(props.field) ? value.map(v => v[props.field]) : value;
        const operator = props.multiple && Array.isArray(value) ? 'in' : '=';
        if(value) {
            searchFilters.push({column: column, operator: operator, value: value})
        }
    }
    if(props.preload) {
        searchFilters.push({logic: searchFilters.length ? 'or' : 'and', column: props.field ?? 'id', operator: '!=', value: 0})
    }
    if(searchFilters.length) {
        fetchOptions(searchFilters);
    }
})

function search(value) {
    if(value && value !== '' && value.length > 3) {
        const searchFilters = [
            ...(props.filters?.map(filter => {
                if(!filter.hasOwnProperty('value')) {
                filter.value = value;
                }
                return filter;
            }) ?? []),
            ...(props.searchColumns.length
                    ? [{rawColumn: props.searchColumns.join(" || ' ' || "), operator: 'contains', value: value}]
                    : [{column: props.field ?? props.label, operator: 'contains', value: value}]
            )];
        fetchOptions(searchFilters);
    }
}

function fetchOptions(searchFilters) {
    loading.value = true;
    axios.post(props.url, {
        search: searchFilters,
        relations: props.relations,
        limit: props.limit,
    }).then(response => {
        if (response.data.success && response.data.records) {
            options.value = response.data.records;
        }
        loading.value = false;
    })
}
</script>