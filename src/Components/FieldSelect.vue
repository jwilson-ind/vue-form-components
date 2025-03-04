<template>
    <div class="field-select">
        <MultiSelect
            v-model="selectedOption"
            :options="options"
            :label="label"
            :track-by="field"
            :placeholder="placeholder"
            :multiple="multiple"
            :show-labels="false"
            :disabled="disabled"
            :loading="loading"
            :show-no-options="false"
            @search-change="emit('searchChange', $event)"
        >
            <template v-slot:singleLabel="{option}">
                <slot name="selectedOption" :option="option"></slot>
            </template>
            <template v-slot:option="{option}">
                <slot name="option" :option="option"></slot>
            </template>
            <template #noResult>No Results Found</template>
        </MultiSelect>
    </div>
</template>

<script setup>
import MultiSelect from "vue-multiselect";
import {ref, watch} from "vue";

const emit = defineEmits(['update:modelValue', 'searchChange']);
const props = defineProps({
    modelValue: {},
    multiple: {
        type: Boolean,
        default() {
            return false;
        },
    },
    options: {
        default() {
            return [];
        }
    },
    field: {
        default() {
            return 'id';
        }
    },
    label: {
        default() {
            return 'name';
        }
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
    loading: {
        default() {
            return false;
        }
    }
});

const selectedOption = ref(getOptionForField(props.modelValue));

function getOptionForField(val) {
    if(props.multiple) {
        const values = Array.isArray(val) ? (val[0] && val[0].hasOwnProperty(props.field) ? val.map(v => v[props.field]) : val) : [val];
        return props.options.filter(option => values.indexOf(option[props.field]) > -1);
    }
    return props.options.find(option => option[props.field] == val);
}

function optionEqualsModelValue(option, val) {
    if(props.multiple) {
        return JSON.stringify(option.map(o => o[props.field]).sort()) == JSON.stringify((Array.isArray(val) ? (val[0] && val[0].hasOwnProperty(props.field) ? val.map(v => v[props.field]) : val) : [val]).sort());
    }
    return option && val == option[props.field];
}

watch(selectedOption, (selectedOption) => {
    if(!optionEqualsModelValue(selectedOption, props.modelValue)) {
        const selectedValue = selectedOption ? (props.multiple ? selectedOption.map(option => option[props.field]) : selectedOption[props.field]) : null;
        emit('update:modelValue', selectedValue);
    }
});

watch(() => props.modelValue, (val) => {
    if(!optionEqualsModelValue(selectedOption.value, val)) {
        selectedOption.value = getOptionForField(val);
    }
});

watch(() => props.options, () => {
    if(!selectedOption.value || !selectedOption.value.length) {
        selectedOption.value = getOptionForField(props.modelValue);
    }
})
</script>

<style src="../multiselect.css"></style>