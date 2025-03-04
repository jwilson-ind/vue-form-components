<template>
    <section class="vue-form-components bg-white border shadow-md sm:rounded-md">
        <div v-for="(section, index) in sections" class="p-6 space-y-6 border-b-2" :class="section.class" :style="section.style">
            <div :class="section.headerClass" v-if="section.title">
                <h3 class="text-2xl font-medium leading-6 text-gray-800">{{ section.title }}</h3>
                <p class="mt-1 text-sm text-gray-500" v-if="section.description">
                    {{ section.description }}
                </p>
            </div>
            <div :class="section.bodyClass">
                <slot :name="`beforeGroupSection${index}`"></slot>
                <FormInputGroup :form="section.model ?? modelValue" :id="section.id" :inputs="section.inputs" :class="section.inputGroupClass" :disabled="disabled" :indicate-required="section.indicateRequired"></FormInputGroup>
                <slot :name="`afterGroupSection${index}`"></slot>
            </div>
        </div>
        <slot/>
        <div class="px-6 py-3 bg-gray-100 text-right rounded-b flex items-center" :class="footerClass" :style="footerStyle" v-if="!hideFooter">
            <slot name="footer"></slot>
            <div class="flex-1 flex justify-end" :class="buttonsContainerClass">
                <DeleteForm class="mr-auto" v-if="confirmDelete && !hideDelete && modelValue.id" @destroy="destroy"/>
                <Button v-else-if="!hideDelete && modelValue.id" context="form-btn-red" class="mr-auto" @click="destroy">Delete</Button>
                <Button v-if="!cancelUrl && !hideCancel" context="form-btn-white" @click.prevent="cancel">{{ cancelName }}</Button>
                <Button v-else-if="!hideCancel" type="link" context="form-btn-white" :href="cancelUrl">{{ cancelName }}</Button>
                <Button class="ml-4 flex" context="form-btn-primary" :disabled="loading || submitDisabled || disabled" @click="submit">
                    <svg v-if="loading"  class="animate-spin -ml-1 mr-3 h-5 w-5 text-green-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ submitName }}
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup>
import FormInputGroup from "./FormInputGroup.vue";
import Button from "./FormButton.vue";
import DeleteForm from "./DeleteForm.vue";
import {computed, watch} from "vue";

const emit = defineEmits(['submit', 'destroy','update:modelValue', 'cancel']);
const props = defineProps({
    modelValue: {
        type: Object,
    },
    loading: {
        type: Boolean,
        default(){
            return false;
        }
    },
    sections: {
        type: Array,
        default() {
            return [{title: null}];
        }
    },
    footerClass: {
        type: String,
    },
    footerStyle: {
        type: String,
    },
    buttonsContainerClass: {
        type: String,
    },
    cancelAction: {
        type: Function,
    },
    cancelUrl: {
        type: String,
    },
    backOnCancel: {
        type: Boolean,
        default: false,
    },
    cancelName: {
        type: String,
        default: 'Cancel',
    },
    submitName: {
        type: String,
        default: 'Save',
    },
    submitDisabled: {
        type: Boolean,
        default: false,
    },
    hideCancel: {
        type: Boolean,
        default: false,
    },
    hideDelete: {
        type: Boolean,
        default: false,
    },
    confirmDelete: {
        type: Boolean,
        default: false,
    },
    hideFooter: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
});

function submit() {
    emit('submit', props.modelValue);
}

function cancel() {
    if(props.cancelAction) {
        props.cancelAction()
    } else {
        if(props.backOnCancel) {
            history.back()
        } else {
            emit('cancel');
        }
    }
}

function destroy() {
    emit('destroy', props.modelValue);
}

watch(
    () => props.modelValue.errors,
    (errors) => {
        for(let i=0; i<props.sections.length; i++) {
            if(props.sections[i].model) {
                props.sections[i].model.errors = errors;
            }
        }
    },
    {deep: true}
)
</script>