<script setup>
import { ref } from "vue";
import SpeedDial from "primevue/speeddial";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

defineProps({
    albumDetail: Object // Corrected prop name
});

const toast = useToast();

const items = ref([
    {
        label: "Add",
        icon: "pi pi-pencil",
        style: { backgroundColor: "red" },
        command: () => {
            toast.add({ severity: "info", summary: "Add", detail: "Data Added" });
        },
    },
    {
        label: "Delete",
        icon: "pi pi-trash",
        command: () => {
            toast.add({
                severity: "error",
                summary: "Delete",
                detail: "Data Deleted",
            });
        },
    },
]);
</script>

<template>
    <div class="bg-slate-200 p-4 rounded-xl albumDetail">
        <router-link to="/item">
            <div>
                <img :src="`${albumDetail.image}`" :alt="albumDetail.albumName" />
            </div>
        </router-link>
        <div class="mt-4">
            <p class="text-sm">{{ albumDetail.albumVersion }}</p>
            <p class="font-semibold text-teal-900">{{ albumDetail.albumName }}</p>
        </div>
        <div class="flex my-2 justify-between items-end">
            <p class="font-bold text-lg mt-1">{{ albumDetail.albumPrice }}</p>
            <div :style="{ position: 'relative' }">
                <SpeedDial showIcon="pi pi-ellipsis-h" hideIcon="pi pi-times" :model="items" direction="left"
                    :style="{ top: 'calc(50% - 32px)', right: 0 }" />
                <Toast />
            </div>
        </div>
    </div>
</template>
