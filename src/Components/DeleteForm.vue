<template>
    <div>
        <Button @click.prevent="open = true" context="btn-red">
            Delete
        </Button>
        <DeleteConfirmModal :open="open" @destroy="$emit('destroy')" @close="open=false"/>
    </div>
</template>

<script setup>
import DeleteConfirmModal from "./DeleteConfirmModal.vue";
import {ref} from 'vue';
import Button from "./FormButton.vue";

const open = ref(false);
</script>