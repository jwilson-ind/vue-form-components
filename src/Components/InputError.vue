<template>
    <div v-show="message" aria-live="assertive">
        <p class="text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps(['message']);
</script>
