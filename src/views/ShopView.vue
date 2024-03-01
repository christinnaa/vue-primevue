
<template>
    <div class="w-screen bg-slate-100 flex">
        <div class="h-screen w-24 flex justify-end items-center bg-slate-100">
            <Sidebar />
        </div>
        <div class="grow flex-col px-8">
            <Header />
            <div class="container mx-auto">
                <div class="flex flex-wrap gap-2 my-4">
                    <Chip class="text-sm shadow-sm px-4 active-chip" label="ALL" />
                    <Chip class="bg-neutral-200 text-sm shadow-sm px-4" label="SEVENTEEN" />
                    <Chip class="bg-neutral-200 text-sm shadow-sm px-4" label="NCT DREAM" />
                </div>
                <div class="my-3 flex justify-end px-2">
                    <div class="card flex justify-content-center">
                        <Button class="text-sm px-3 py-2" label="Add Product" @click="visible = true" />
                        <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '28rem' }">
                            <template #header>
                                <div class="inline-flex align-items-center items-center gap-3">
                                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                                        shape="circle" />
                                    <span class="font-bold white-space-nowrap">Amy Elsner</span>
                                </div>
                            </template>
                            <div class="flex items-center gap-3 mb-3 justify-between">
                                <label for="username" class="font-semibold w-28">Artist</label>
                                <InputText id="username" autocomplete="off" />
                            </div>
                            <div class="flex items-center gap-3 mb-3 justify-between">
                                <label for="username" class="font-semibold">Album Name</label>
                                <InputText id="username" autocomplete="off" />
                            </div>
                            <div class="flex items-center gap-3 mb-3 justify-between">
                                <label for="currency-us" class="font-semibold"> Price</label>
                                <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="KRW"
                                    locale="en-US" />
                            </div>
                            <template #footer>
                                <Button label="Cancel" text severity="secondary" @click="visible = false" autofocus />
                                <Button label="Save" outlined severity="secondary" @click="visible = false" autofocus />
                            </template>
                        </Dialog>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <!-- Replace the following divs with your actual grid items -->
                    <router-link to="/item">
                        <div class="bg-slate-200 p-4 rounded-xl">
                            <div class="bg-slate-50 hover:bg-sky-50 rounded-lg">
                                <img class="rounded-md" src="../assets/seventeenth-heaven.png" alt="">
                            </div>
                            <div class="mt-4">
                                <p>11th Mini Album 'SEVENTEENTH HEAVEN'</p>
                                <p class="font-bold mt-1">₩62,100</p>
                            </div>
                        </div>
                    </router-link>
                    <div class="bg-slate-200 p-4 rounded-xl">
                        <div>
                            <img class="rounded-md" src="../assets/fml.png" alt="">
                        </div>
                        <div class="mt-4">
                            <p>11th Mini Album 'SEVENTEENTH HEAVEN'</p>
                            <p class="font-bold mt-1">₩62,100</p>
                        </div>
                    </div>
                    <div class="bg-slate-200 p-4 rounded-xl">
                        <div>
                            <img class="rounded-md" src="../assets/istj.png" alt="">
                        </div>
                        <div class="mt-4">
                            <p>11th Mini Album 'SEVENTEENTH HEAVEN'</p>
                            <p class="font-bold mt-1">₩62,100</p>
                        </div>
                    </div>
                    <div class="bg-slate-200 p-4 rounded-xl">
                        <div>
                            <img class="rounded-md" src="../assets/candy-special.png" alt="">
                        </div>
                        <div class="mt-4">
                            <p>11th Mini Album 'SEVENTEENTH HEAVEN'</p>
                            <p class="font-bold mt-1">₩62,100</p>
                        </div>
                    </div>
                    <div class="bg-slate-200 p-4 rounded-xl">
                        <div>
                            <img class="rounded-md" src="../assets/glitch-mode.png" alt="">
                        </div>
                        <div class="mt-4">
                            <p>11th Mini Album 'SEVENTEENTH HEAVEN'</p>
                            <p class="font-bold mt-1">₩62,100</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="card mt-5 border">
                    <Paginator class="bg-slate-100" :rows="10" :totalRecords="5"></Paginator>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Sidebar from "@/components/Sidebar.vue";
import Chip from 'primevue/chip';
import Header from "@/components/Header.vue";
import Dialog from 'primevue/dialog';
import Avatar from "primevue/avatar";
import InputText from 'primevue/inputtext';

const visible = ref(false);
const value1 = ref(0);
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