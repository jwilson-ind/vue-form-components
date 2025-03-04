<template>
    <a v-if="type === 'link'" :href="href" :class="context">
        <slot />
    </a>
    <button v-else :type="type" :class="context">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    context: {
        type: String,
        default: 'form-btn-primary',
    },
    type: {
        type: String,
        default: 'submit',
    },
    href: {
        type: String,
    }
});
</script>
