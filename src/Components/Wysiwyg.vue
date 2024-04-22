<template>
    <Editor
        :api-key="apiKey"
        :init="{
        plugins: 'lists link image lists table code help wordcount',
        toolbar: 'undo redo | styles | bold italic numlist bullist | link image '
      }"
    />
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'

const props = defineProps(['apiKey']);
</script>