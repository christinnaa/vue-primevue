<script setup>
const props = defineProps({
    label: {
        type: String,
    },
});
</script>

<template>
    <Chip :label="label" class="bg-neutral-200 text-sm shadow-sm pr-4 hover:bg-teal-500 hover:text-white"
        image="https://phinf.wevpstatic.net/MjAyMzA5MjBfMjky/MDAxNjk1MTM1NjgzMDc4.bgN1B4pIYMfOVchSm9mrkt-8L8yXyVWjjK8Xywaa7Cog.tTiSoucynyTjgCYgALOgAKPlIVzdMk6yTsn13TrXgaUg.JPEG/987421d1-0863-44d9-863b-ec3de74e43fe.jpeg" />
</template>

