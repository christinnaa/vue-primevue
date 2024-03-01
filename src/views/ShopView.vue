
<template>
    <div class="w-screen bg-slate-100 flex">
        <div class="h-screen w-24 bg-red-500 flex justify-end items-center bg-slate-100">
            <!-- <div class="h-1/2 w-20 rounded-2xl bg-white flex flex-col items-center justify-center gap-5">
                <router-link to="/home">
                    <Button :class="{ 'active': $route.path === '/home' }" v-tooltip="{
                        value: 'Home',
                        pt: {
                            arrow: {
                                style: {
                                    marginLeft: '6px',
                                }
                            },
                            text: 'bg-primary-500 ml-1 text-sm'
                        }
                    }" icon=" pi pi-home" rounded outlined aria-label="Filter" />
                </router-link>
                <router-link to="/">
                    <Button v-tooltip="{
                        value: 'Search',
                        pt: {arrow: {style: {marginLeft: '6px'}},
                            text: 'bg-primary-500 ml-1 text-sm'}}" icon="pi pi-search" severity="secondary" rounded outlined aria-label="Bookmark" />
                </router-link>
                <router-link to="/shop">
                    <Button :class="{ 'active': $route.path === '/shop' }" v-tooltip="{
                        value: 'Cart',
                        pt: {
                            arrow: {
                                style: {
                                    marginLeft: '6px',
                                }
                            },
                            text: 'bg-primary-500 ml-1 text-sm'
                        }
                    }" icon="pi pi-shopping-cart" rounded outlined aria-label="User" />
                </router-link>
                <router-link to="/">
                    <Button v-tooltip="{
                        value: 'Favorites',
                        pt: {
                            arrow: {
                                style: {
                                    marginLeft: '6px',
                                }
                            },
                            text: 'bg-primary-500 ml-1 text-sm'
                        }
                    }" icon="pi pi-heart" rounded outlined aria-label="Notification" />
                </router-link>
                <Button v-tooltip="{
                    value: 'Users',
                    pt: {
                        arrow: {
                            style: {
                                marginLeft: '6px',
                            }
                        },
                        text: 'bg-primary-500 ml-1 text-sm'
                    }
                }" icon="pi pi-user" rounded outlined aria-label="Cancel" />
                <Button v-tooltip="{
                    value: 'Settings',
                    pt: {
                        arrow: {
                            style: {
                                marginLeft: '6px',
                            }
                        },
                        text: 'bg-primary-500 ml-1 text-sm'
                    }
                }" icon="pi pi-cog" rounded outlined aria-label="Favorite" />
                <router-link to="/">
                    <Button v-tooltip="{
                        value: 'Sign Out',
                        pt: {
                            arrow: {
                                style: {
                                    marginLeft: '6px',
                                }
                            },
                            text: 'bg-primary-500 ml-1 text-sm'
                        }
                    }" icon="pi pi-sign-out" severity="danger" rounded outlined aria-label="Search" />
                </router-link>
            </div> -->
            <Sidebar />
        </div>
        <div class="grow flex-col px-8">
            <h1 class="mb-16">Shop</h1>
            <div class="container mx-auto">
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
import Paginator from 'primevue/paginator';
import Sidebar from "@/components/Sidebar.vue";

</script>

<style scoped>
.custom-tooltip .p-tooltip .p-tooltip-arrow {
    background-color: #0d9488 !important;
}

.active {
    background-color: #0d9488;
    /* Set your active state background color */
    color: white;
    /* Set your active state text color */
}
/* 
.p-paginator .p-component {
    background: red !important;
} */
</style>