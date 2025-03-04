<template>
    <div :class="groupClass">
        <FormInput v-for="input in inputs"
                   :form="form"
                   :field="input.field"
                   :id="input.id"
				   :id-suffix="id"
                   :class="input.class"
                   :type="input.type"
                   :multiple="input.multiple"
                   :acceptable-types="input.acceptableTypes"
                   :max-size="input.maxSize"
                   :select="input.select"
                   :wysiwyg="input.wysiwyg"
                   :label="input.label"
                   :placeholder="input.placeholder"
                   :autocomplete="input.autocomplete"
                   :required="input.required"
                   :disabled="input.disabled || disabled"
                   :info="input.info"
                   :indicate-required="typeof input.indicateRequired !== 'undefined' ? input.indicateRequired : indicateRequired"
				   :errors="errors"
        ></FormInput>
        <slot></slot>
    </div>
</template>

<script setup>
import FormInput from "./FormInput.vue";
import {computed} from "vue";

const props = defineProps({
    id: {},
    class: {},
    form: {
        type: Object,
        required: true,
    },
    inputs: {
        type: Array,
        default() {
            return [];
        }
    },
    indicateRequired: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
	errors: {},
});

const groupClass = computed(() => {
    return props.class ? props.class : 'space-y-6';
})
</script>