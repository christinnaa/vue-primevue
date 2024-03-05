<template>
    <div class="w-screen bg-slate-100 flex">
        <div class="h-screen w-24 flex justify-end items-center bg-slate-100">
            <Sidebar />
        </div>
        <div class="grow flex-col px-8">
            <Header />
            <div class="container mx-auto">
                <!-- <ConfirmDialog group="templating">
                    <template #message="slotProps">
                        <div
                            class="flex flex-col items-center w-full gap-3 border-b border-surface-200 dark:border-surface-700">
                            <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
                            <p>{{ slotProps.message.message }}</p>
                        </div>
                    </template>
                </ConfirmDialog> -->
                <div class="my-8 flex justify-between">
                    <div class="hidden md:flex flex-wrap">
                        <div class="flex flex-wrap gap-2">
                            <BadgeTags v-for="(item, index) in chipData" :key="index" :label="item.label"
                                :image="item.image" />
                        </div>
                    </div>
                    <div class="card flex justify-content-center">
                        <!-- <div class="card flex justify-center">
                            <Button @click="showTemplate()" icon="pi pi-check" label="Confirm"></Button>
                        </div> -->
                        <Button class="text-sm px-3 py-2" label="Add Product" @click="visible = true" />
                        <Dialog v-model:visible="visible" modal header="Add Product" :style="{ width: '28rem' }">

                            <template #header>
                                <div class="inline-flex align-items-center items-center gap-3">
                                    <Avatar class="bg-teal-300 text-white" icon="pi pi-plus" shape="circle" />
                                    <span class="font-bold white-space-nowrap">Add Product</span>
                                </div>
                            </template>
                            <div class="flex items-center gap-3 mb-3 justify-between">
                                <label for="username" class="font-semibold w-28">Artist</label>
                                <InputText id="username" autocomplete="off" class="input" />
                            </div>
                            <div class="flex items-center gap-3 mb-3 justify-between">
                                <label for="username" class="font-semibold">Album Name</label>
                                <InputText id="username" autocomplete="off" class="input" />
                            </div>
                            <div class="flex items-center gap-3 mb-3 justify-between">
                                <label for="username" class="font-semibold">Album Version</label>
                                <Dropdown v-model="selectedAlbum" :options="albumVersion" optionLabel="name"
                                    placeholder="Select Album Version" class="input" />
                            </div>
                            <div class="flex items-center mb-3 justify-between">
                                <label for="currency-us" class="font-semibold">Price</label>
                                <InputNumber class="input" v-model="value1" inputId="currency-us" mode="currency"
                                    currency="USD" locale="en-US" />
                            </div>

                            <template #footer>
                                <Button label="Cancel" text severity="secondary" @click="visible = false" autofocus />
                                <Button label="Save" outlined severity="secondary" @click="visible = false" autofocus />
                            </template>
                        </Dialog>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
                    <ProductCard v-for="(albumDetail, index) in albumDetails" :key="index" :albumDetail="albumDetail" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import Sidebar from "@/components/Sidebar.vue";
import Paginator from 'primevue/paginator';
import Chip from "primevue/chip";
import Header from "@/components/Header.vue";
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";
import InputText from "primevue/inputtext";
import SpeedDial from "primevue/speeddial";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
// import { useRouter } from 'vue-router';
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from "primevue/useconfirm";
import BadgeTags from "../components/BadgeTags.vue";
import ProductCard from "../components/ProductCard.vue";
// import { useToast } from "primevue/usetoast";

// const toast = useToast();
// const router = useRouter();

const visible = ref(false);
const value1 = ref(0);
const selectedAlbum = ref();

const confirm = useConfirm();
const toast = useToast();

const albumVersion = ref([
    { name: "Single", code: 1 },
    { name: "Mini Album", code: "2" },
    { name: "Full Album", code: "2" },
    { name: "Repackaged Album", code: "2" },
]);

const chipData = reactive([
    { label: 'ALL', image: 'https://weverseshop.io/weverseshop-touchicon.png' },
    { label: 'SEVENTEEN', image: 'https://phinf.wevpstatic.net/MjAyMzA5MjBfMjky/MDAxNjk1MTM1NjgzMDc4.bgN1B4pIYMfOVchSm9mrkt-8L8yXyVWjjK8Xywaa7Cog.tTiSoucynyTjgCYgALOgAKPlIVzdMk6yTsn13TrXgaUg.JPEG/987421d1-0863-44d9-863b-ec3de74e43fe.jpeg' },
    { label: 'NCT DREAM', image: 'https://phinf.wevpstatic.net/MjAyMzA4MjlfMTY1/MDAxNjkzMzE0ODA5MzM3.ZLPBUeYyXA3FrtnSy9BrLN83YGv4b3s7DjrR_NL5h6Yg.1PadKFkVgzYnleV5sgPpzgW-FAEJ2GELu_3lNVlkNgYg.JPEG/47901150629381342d52e19c4-8e02-4a25-8150-e9e070718a2f.jpg' },
    { label: 'AESPA', image: 'https://phinf.wevpstatic.net/MjAyMzA4MjlfMjE5/MDAxNjkzMjk2MjM0NDY3.4Wdn1FTJejuTAMPDfDST1i22IcBQkD71UArxyN5_-uAg.-wh9II0XBvjUyb3kGXn0wLYWioLCytJMUspVJm8RfsYg.JPEG/52726795051369368c65020b-7245-4561-937f-05e266a1ab51.jpg' },
    { label: 'NCT 127', image: 'https://phinf.wevpstatic.net/MjAyMzA4MjlfMjYy/MDAxNjkzMzE0MzEwODQz.g_SovYrDfZ8f8Bk4L7JotZZEmaEzMYVG-9NzU5c2UDQg.SG2yQIotYWhW_mjJAqW88UP5biEM0H_vHA-7mGEYfHkg.JPEG/47900652136539386658d20bc-82e0-4fb6-a98c-1bdd830419fb.jpg' }
]);

const albumDetails = ref([
    {
        albumName: '\'Seventeenth Heaven\'',
        albumVersion: '11th Mini Album',
        albumPrice: '$50.92',
        image: '/src/assets/seventeenth-heaven.png'
    },
    {
        albumName: '\'Drama\' Giant Ver.',
        albumVersion: 'The 4th Mini Album',
        albumPrice: '$13.36',
        image: '/src/assets/aespa.png'
    },
    {
        albumName: '\'ISTJ\' Photobook Ver.',
        albumVersion: 'The 3rd Album',
        albumPrice: '$14.59',
        image: '/src/assets/istj.png'
    },
    {
        albumName: '\'Candy\' Special Ver.',
        albumVersion: 'Winter Special Mini Album',
        albumPrice: '$18.20',
        image: '/src/assets/candy-special.png'
    },
    {
        albumName: '\'Glitch Mode\' Photobook Ver.',
        albumVersion: 'Winter Special Mini Album',
        albumPrice: '$14.59',
        image: '/src/assets/glitch-mode.png'
    },
    {
        albumName: '\'Ay-Yo\' Digipack Ver.',
        albumVersion: 'The 4th Album',
        albumPrice: '$9.67',
        image: '/src/assets/ay-yo.png'
    },
    {
        albumName: '\'FML\'',
        albumVersion: '10th Mini Album',
        albumPrice: '$15.82',
        image: '/src/assets/fml.png'
    },
]);

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

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'pi pi-exclamation-circle',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        rejectClass: 'p-button-sm',
        acceptClass: 'p-button-outlined p-button-sm',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>

<style scoped>
.custom-tooltip .p-tooltip .p-tooltip-arrow {
    background-color: #0d9488 !important;
}

.active {
    background-color: #0d9488;
    color: white;
}

.active-chip {
    background-color: #14b8a6;
    color: #ffffff;
}
</style>