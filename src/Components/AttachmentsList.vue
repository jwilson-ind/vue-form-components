<template>
    <ul v-if="attachments.length" role="list" class="divide-y divide-gray-200 rounded-md bg-white">
        <li v-for="file in attachments" :key="file.id" class="p-2 flex items-center rounded-md">
            <a :href="file.url" target="_blank" class="text-blue-500 rounded-full hover:bg-blue-200 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
            </a>
            <button @click="emit('remove', file)"
                    type="button"
                    class="ml-2 text-red-500 rounded-full hover:bg-red-200 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
            </button>
            <a :href="file.url" target="_blank" class="mx-2 hover:text-blue-500">{{ file.file_name }}</a>
        </li>
    </ul>
</template>

<script setup>
const emit = defineEmits(['remove']);
const props = defineProps({
    attachments: {
        type: Array,
        default() {
            return []
        }
    },
});
</script>
