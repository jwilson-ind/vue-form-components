<template>
    <Editor
        api-key="no-api-key"
        :init="{
        plugins: plugins,
        toolbar: toolbar,
        menubar: menubar,
        height: height,
      }"
    />
</template>

<script setup>
/* from https://www.tiny.cloud/docs/tinymce/latest/vite-es6-npm/ */
import tinymce from 'tinymce';
import 'tinymce/icons/default/icons.min.js';
import 'tinymce/themes/silver/theme.min.js';
import 'tinymce/models/dom/model.min.js';
import 'tinymce/skins/ui/oxide/skin.js';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';
import Editor from '@tinymce/tinymce-vue'
const props = defineProps({
    plugins: {
        default: 'lists link table code help wordcount'
    },
    toolbar: {
        default: 'undo redo | styles | bold italic numlist bullist | link'
    },
    menubar: {
        default: false
    },
    height: {
        default: 500
    }
})
</script>