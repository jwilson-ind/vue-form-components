<template>
    <label v-if="type === 'list'" :for="id+'_list_item_'+index" :class="[multiple ? 'checkbox-label' : 'radio-label', {disabled: disabled}, listItemClass]" v-for="(option, index) in selectOptions">
        <input v-if="multiple" :id="id+'_list_item_'+index" class="input-checkbox" type="checkbox" :value="isFieldSelect ? option[field ?? 'id'] : option" :disabled="disabled" v-model="multipleValue">
        <input v-else :id="id+'_list_item_'+index" class="input-radio" type="radio" :value="isFieldSelect ? option[field ?? 'id'] : option" :disabled="disabled" v-model="thisModelValue" @change="$emit('update:modelValue', $event.target.value)">
        <span class="cursor-pointer ml-2 align-middle">{{ isFieldSelect ? option[label ?? 'name'] : renderOption(option) }}</span>
    </label>
    <AsyncSelect v-else-if="type === 'async'" :url="url" v-model="thisModelValue" :multiple="multiple" :field="field" :label="label" :filters="filters" :search-columns="searchColumns" :limit="limit" :preload="preload" :placeholder="placeholder" :disabled="disabled" @update:modelValue="$emit('update:modelValue', $event)"></AsyncSelect>
    <FieldSelect v-else-if="isFieldSelect" v-model="thisModelValue" :multiple="multiple" :field="field" :label="label" :options="selectOptions" :placeholder="placeholder" :disabled="disabled" @update:modelValue="$emit('update:modelValue', $event)"></FieldSelect>
    <select v-else-if="type === 'basic'" class="input-select" :value="modelValue" :disabled="disabled" @change="$emit('update:modelValue', $event.target.value)">
        <option value="" :disabled="required === true">select...</option>
        <option v-for="option in selectOptions" :value="option">{{ renderOption(option) }}</option>
    </select>
    <VueSelect v-else
               v-model="thisModelValue"
               :options="selectOptions"
               :placeholder="placeholder"
               :multiple="multiple"
               :show-labels="false"
               :disabled="disabled"
               @update:modelValue="$emit('update:modelValue', $event)"
    ></VueSelect>
</template>

<script setup>
import FieldSelect from "./FieldSelect.vue";
import VueSelect from "vue-multiselect";
import {computed, ref, watch} from "vue";
import AsyncSelect from "./AsyncSelect.vue";
import {titleCase} from "../utilities.js";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {},
    id: {
        type: String,
        default() {
            return Math.random().toString(36).slice(2);
        }
    },
    type: {
        type: String,
    },
    multiple: {
        type: Boolean,
        default() {
            return false;
        },
    },
    url: {
        type: String,
    },
    options: {
        type: Array,
        default() {
            return [];
        }
    },
    field: {
        type: String,
    },
    label: {
        type: String,
    },
    listItemClass: {
        type: String,
    },
    filters: {
        type: Array,
    },
    searchColumns: {
        type: Array,
    },
    limit: {
        type: Number,
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
    },
    required: {},
    titleCaseOptions: {
        default() {
            return false;
        }
    },
})

const multipleValue = ref(Array.isArray(props.modelValue) ? props.modelValue : []);

watch(multipleValue, (val) => {
    emit('update:modelValue', val);
})

const thisModelValue = ref(props.modelValue);

watch(() => props.modelValue, (value) => {
    thisModelValue.value = value;
})

const selectOptions = computed(() => {
    return props.options ? props.options.filter(option => !!option) : [];
})

const isFieldSelect = computed(() => {
    return typeof selectOptions.value[0] && typeof selectOptions.value[0] === 'object'
        && selectOptions.value[0].hasOwnProperty(props.field ?? 'id')
        && selectOptions.value[0].hasOwnProperty(props.label ?? 'name');
});

function renderOption(option) {
    return typeof option === 'string' && props.titleCaseOptions ? titleCase(option) : option;
}
</script>