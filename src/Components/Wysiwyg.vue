<template>
    <Editor
        api-key="l8gtrjg6vtcgsosw58s7yzg4cmp59sfa3o2wmx6yko5bpdu0"
        :init="{
        plugins: 'lists link image lists table code help wordcount',
        toolbar: 'undo redo | styles | bold italic numlist bullist | link image '
      }"
    />
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'

</script>