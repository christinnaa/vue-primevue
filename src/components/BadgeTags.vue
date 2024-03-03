<script setup>
import Chip from 'primevue/chip';

defineProps({
    label: {
        type: String,
    },
    image: {
        type: String
    }
});
</script>

<template>
    <div>
        <Chip :label="label" class="bg-neutral-200 text-sm shadow-sm pr-4 hover:bg-gradient-to-r from-teal-300 to-teal-500 hover:text-white"
            :image="image" />
    </div>
</template>
