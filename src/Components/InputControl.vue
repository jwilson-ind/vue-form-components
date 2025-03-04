<template>
    <div :class="{error: inputErrors?.length, required: indicateRequired && required}">
        <div v-if="type === 'checkbox'">
            <label :for="id" class="checkbox-label" :class="{disabled: disabled}">
                <Checkbox :id="id" :checked="modelValue" @update:checked="checked" :required="required" :disabled="disabled" :class="{'hidden': hideCheckbox}"></Checkbox>
                <slot name="svg" />
                <span class="cursor-pointer ml-2 align-middle">{{ label }}<span v-if="indicateRequired && required" class="text-red-600 ml-1">*</span></span>
            </label>
        </div>
        <div v-else>
            <label :for="id" v-if="label" class="input-label" :class="{disabled: disabled}">{{ label }}<span v-if="indicateRequired && required" class="text-red-600 ml-1">*</span></label>
            <Select v-if="select" :id="id" :type="select.type" :multiple="select.multiple" :url="select.url" :field="select.field" :label="select.label" :options="select.options" :filters="select.filters" :search-columns="select.searchColumns" :limit="select.limit" :preload="select.preload" v-model="thisModelValue" :disabled="disabled" :required="required" @update:modelValue="$emit('update:modelValue', $event)" :placeholder="placeholder ? placeholder : label"></Select>
            <div v-else-if="type === 'attachments'">
                <AttachmentsList :attachments="attachments" @remove="emit('remove-attachment', $event)"></AttachmentsList>
                <FileUploadInput multiple :id="id" v-model="thisModelValue" :acceptable-types="acceptableTypes" :max-size="maxSize" :placeholder="placeholder" :disabled="disabled" @update:modelValue="$emit('update:modelValue', $event)" @preview="$emit('preview', $event)"/>
            </div>
            <Wysiwyg v-else-if="type === 'wysiwyg' || wysiwyg" v-model="thisModelValue" @update:modelValue="$emit('update:modelValue', $event)" :height="wysiwyg?.height" :menubar="wysiwyg?.menubar" :plugins="wysiwyg?.plugins" :toolbar="wysiwyg?.toolbar"/>
            <FileUploadInput v-else-if="type === 'image' || type === 'file'" :id="id" v-model="thisModelValue" :acceptable-types="acceptableTypes" :max-size="maxSize" :placeholder="placeholder" :disabled="disabled" @update:modelValue="$emit('update:modelValue', $event)" @preview="$emit('preview', $event)"/>
            <textarea v-else-if="parsedType === 'textarea'" :id="id" class="input-textarea" :rows="textareaRows" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder ? placeholder : label" :disabled="disabled"></textarea>
            <MultiInput v-else-if="multiple" :id="id" :type="type" :field="multiple.field" :label="multiple.label" :can-add="multiple.canAdd" :taggable="multiple.taggable" :options="multiple.options" v-model="thisModelValue" @update:modelValue="$emit('update:modelValue', $event)" class="mt-1" :placeholder="placeholder ? placeholder : label" :disabled="disabled"></MultiInput>
            <div v-else-if="parsedType === 'currency'" class="flex items-center">
                <div class="input-text !bg-zinc-100 !rounded-r-none !border-r-0 !w-auto">$</div>
                <input :id="id" class="input-text !rounded-l-none" type="number" :value="currencyValue" @change="updateCurrencyValue($event.target.value)" :placeholder="placeholder ? placeholder : label" :autocomplete="autocomplete" :required="required" :disabled="disabled" :min="min" :max="max" :step="step" @wheel="(e) => e.target.blur()"/>
            </div>
            <input v-else :id="id" class="input-text" :type="parsedType" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder ? placeholder : label" :autocomplete="autocomplete" :required="required" :disabled="disabled" :min="min" :max="max" :step="step" @wheel="(e) => e.target.blur()"/>
        </div>
        <div v-if="info" class="text-sm text-gray-400" v-html="info"></div>
        <InputError v-for="error in inputErrors" :message="error.replaceAll('.file', '')"></InputError>
    </div>
</template>

<script setup>
import InputError from './InputError.vue';
import Checkbox from './Checkbox.vue';
import {computed, ref, watch} from "vue";
import Select from "./Select.vue";
import MultiInput from "./MultiInput.vue";
import AttachmentsList from "./AttachmentsList.vue";
import FileUploadInput from "./FileUpload/FileUploadInput.vue";
import Wysiwyg from './Wysiwyg.vue';
const props = defineProps({
    modelValue: {},
    placeholder: {},
    autocomplete: {},
    required: {},
    disabled: {},
    id: {
        type: String,
        default() {
            return Math.random().toString(36).slice(2);
        }
    },
    label: {
        type: String,
    },
    type: {
        type: String,
        default() {
            return 'text';
        }
    },
    multiple: {
        type: [Boolean, Object],
        default() {
            return false;
        }
    },
    select: {
        type: Object,
    },
    wysiwyg: {
        type: Object,
    },
    errors: {
        type: [Array, String],
        default() {
            return [];
        }
    },
    attachments: {
        type: Array,
        default() {
            return [];
        }
    },
    acceptableTypes: {
        type: Array,
    },
    maxSize: {
        type: [Number, String],
        default: '10MB'
    },
    info: {
        type: String,
    },
    hideCheckbox: {
        type: Boolean,
        default: false,
    },
    indicateRequired: {
        type: Boolean,
        default: false,
    }
});
const emit = defineEmits(['update:modelValue', 'remove-attachment', 'preview']);

const inputErrors = computed(() => {
    return typeof props.errors === 'string' ? [props.errors] : props.errors;
});

const textareaRows = computed(() => {
    // 'textarea:5'
    return props.type.indexOf('textarea') === 0 ? props.type.split(':')[1] ?? '10' : '10';
});

const parsedType = computed(() => props.type.split(':')[0]);

const minMaxStepAttributes = computed(() => {
    // 'number:min=1:max=1:step=1'
	const attributeKeys = props.type.match(/:min=|:max=|:step=/g);
	const attributeValues = props.type.split(/:min=|:max=|:step=/g);
    return attributeKeys ? Object.fromEntries(
		attributeKeys.map((key, index) => {
            const name = key.replace(':', '').replace('=', ''); // 'min'
            return [name, attributeValues[index+1] ?? null]; // ['min', '1']
        })
    ) : {};
})

const min = computed(() => minMaxStepAttributes.value.hasOwnProperty('min') ? minMaxStepAttributes.value.min : null);
const max = computed(() => minMaxStepAttributes.value.hasOwnProperty('max') ? minMaxStepAttributes.value.max : null);
const step = computed(() => minMaxStepAttributes.value.hasOwnProperty('step') ? minMaxStepAttributes.value.step : null);

const thisModelValue = ref(props.modelValue);

watch(() => props.modelValue, (value) => {
    thisModelValue.value = value;
})

function checked(value) {
    emit('update:modelValue', value);
}

const currencyValue = ref(parsedType.value === 'currency' && props.modelValue ? (parseFloat(props.modelValue) || 0).toFixed(2) : null)
function updateCurrencyValue(value) {
    currencyValue.value = value || value === 0 ? (parseFloat(value) || 0).toFixed(2) : null
    emit('update:modelValue', currencyValue.value);
}
</script>