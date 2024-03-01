
<template>
    <div class="w-screen bg-slate-100 flex">
        <div class="h-screen w-24 flex justify-end items-center bg-slate-100">
            <Sidebar />
        </div>
        <div class="flex-grow flex-col px-8">
            <h1>Home</h1>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import Sidebar from "@/components/Sidebar.vue";

</script>

<style scoped>
.custom-tooltip .p-tooltip .p-tooltip-arrow {
    background-color: #0d9488 !important;
}

.active {
    background-color: #0d9488; /* Set your active state background color */
    color: white; /* Set your active state text color */
}
</style>