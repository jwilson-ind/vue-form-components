<template>
    <div :class="groupClass">
        <FormInput v-for="input in formInputs"
                   :form="form"
                   :field="input.field"
                   :id="input.id"
                   :class="input.class"
                   :type="input.type"
                   :multiple="input.multiple"
                   :acceptable-types="input.acceptableTypes"
                   :max-size="input.maxSize"
                   :select="input.select"
                   :label="input.label"
                   :placeholder="input.placeholder"
                   :autocomplete="input.autocomplete"
                   :required="input.required"
                   :disabled="input.disabled"
                   :info="input.info"
                   :indicate-required="typeof input.indicateRequired !== 'undefined' ? input.indicateRequired : indicateRequired"
        ></FormInput>
        <slot></slot>
    </div>
</template>

<script setup>
import FormInput from "./FormInput.vue";
import {computed} from "vue";

const props = defineProps({
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
});

const groupClass = computed(() => {
    return props.class ? props.class : 'space-y-6';
})

const formInputs = computed(() => {
    return props.inputs.length ? props.inputs : Object.keys(props.form).filter(key => key !== 'id').map(key => ({field: key}));
});
</script>