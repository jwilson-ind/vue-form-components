<template>
    <InputControl :id="inputId"
                  :type="type"
                  :multiple="multiple"
                  :select="select"
                  :wysiwyg="wysiwyg"
                  :label="inputLabel"
                  v-model="form[field]"
                  :attachments="form.attachments"
                  :acceptable-types="acceptableTypes"
                  :max-size="maxSize"
                  :errors="inputErrors"
                  :placeholder="placeholder"
                  :autocomplete="autocomplete"
                  :required="required"
                  :disabled="disabled"
                  :info="info"
                  :indicate-required="indicateRequired"
                  @remove-attachment="removeAttachment"
    ></InputControl>
</template>

<script setup>
import InputControl from "./InputControl.vue";
import {computed} from "vue";
import {titleCase} from "../utilities.js";

const props = defineProps({
    form: {
        type: Object,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    id: {},
    idSuffix: {},
    label: {
        type: String,
    },
    type: {
        type: String,
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
    placeholder: {},
    autocomplete: {},
    required: {},
    disabled: {},
    indicateRequired: {
        type: Boolean,
        default: false,
    },
	errors: {},
});

const inputId = computed(() => {
    return props.id ? props.id : props.field+'_'+(props.idSuffix ?? Math.random().toString(36).slice(2));
});
const inputLabel = computed(() => {
    return props.label ? props.label : titleCase(props.field);
});
const inputErrors = computed(() => {
	const errors = props.errors ?? props.form.errors;
    let field = props.field+(props.type === 'file' ? '.file' : '');
    return errors && errors[field] ? errors[field] : [];
});

function removeAttachment( attachment ) {
    props.form.attachments = props.form.attachments.filter(formAttachment => formAttachment.id != attachment.id);
}
</script>