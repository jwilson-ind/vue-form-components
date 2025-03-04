<template>
    <input :id="id" type="checkbox" :value="value" v-model="proxyChecked" :disabled="disabled" class="disabled:cursor-not-allowed"/>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['update:checked']);
const props = defineProps({
    id: {},
    checked: {
        type: [Array, Boolean],
        default: false,
    },
    value: {
        default: null,
    },
	disabled: {
		type: Boolean,
		default: false,
	}
});

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit("update:checked", val);
    },
});
</script>
