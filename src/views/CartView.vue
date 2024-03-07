<template>
    <div class="w-screen bg-slate-100 flex">
        <div class="h-screen w-24 flex justify-end items-center bg-neutral-50">
            <Sidebar />
        </div>
        <div class="grow flex-col px-8 bg-neutral-50">
            <Header />
            <div class="container mx-auto mt-8 px-0 md:px-28">
                <div class="flex justify-between">
                    <p class="text-2xl font-bold">Cart</p>
                    <div class="p-2 rounded-md flex items-center text-gray-400 text-sm">
                        <i class="pi pi-exclamation-circle px-1"></i>
                        <p>Products in carts will be deleted <span class="text-black">after 90 days.</span></p>
                    </div>
                </div>
                <Divider class="mt-10" />
                <div class="mt-8">
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex">
                            <img class="w-28 rounded-md" src="../assets/seventeenth-heaven.png" alt=""> 
                            <div class="flex flex-col justify-between px-4">
                                <p>11th Mini Album 'Seventeenth Heaven' (Set)</p>
                                <div class="mb-2">
                                    <InputNumber v-model="numberValue" inputId="horizontal-buttons" showButtons
                                        buttonLayout="horizontal" :step="1" decrementButtonClass="p-button-danger"
                                        incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" :min="0"
                                        :max="7" decrementButtonIcon="pi pi-minus" />
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <p class="px-3 font-bold text-md">$50.92</p>
                            <Button icon="pi pi-times" class="hover:text-red-300" severity="secondary" text rounded
                                aria-label="Cancel" />
                        </div>
                    </div>
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
import Divider from "primevue/divider";
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
const numberValue = ref(1);

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