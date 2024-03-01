
<template>
    <div class="w-screen bg-neutral-50 flex">
        <div class="h-screen w-24 flex justify-end items-center bg-neutral-50">
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
                        pt: {
                            arrow: {
                                style: {
                                    marginLeft: '6px',
                                }
                            },
                            text: 'bg-primary-500 ml-1 text-sm'
                        }
                    }" icon="pi pi-search" severity="secondary" rounded outlined aria-label="Bookmark" />
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
            <h1 class="mb-16">Item</h1>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <!-- Replace the following divs with your actual grid items -->
                    <div class="flex justify-center items-center">
                        <img class="w-5/6" src="../assets/seventeenth-heaven-big.png" alt="">
                    </div>
                    <div class="p-5">
                        <h1 class="font-bold text-sm">SEVENTEEN</h1>
                        <h2 class="text-lg">11th Mini Album 'SEVENTEENTH HEAVEN' (Set)</h2>
                        <p class="font-bold text-xl mt-4">$50.92</p>
                        <Divider />
                        <p>Set</p>


                        <!-- <InputNumber v-model="numberValue" style="width: 1rem;" inputId="horizontal-buttons" showButtons
                            buttonLayout="horizontal" :step="1" decrementButtonClass="p-button-danger"
                            incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus" /> -->


                        
                        <!-- <InputNumber style="width: 1rem" showButtons buttonLayout="horizontal" :step="1" decrementButtonClass="p-button-danger"
                            incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus" /> -->

                        <div class="mt-2">
                            <button @click="decrement"
                                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-tl-xl rounded-bl-xl">
                                -
                            </button>
                            <input type="number" v-model.number="numberValue"
                                class="appearance-none bg-white border border-gray-300 rounded-none py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 w-14">
                            <button @click="increment"
                                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-tr-xl rounded-br-xl">
                                +
                            </button>
                        </div>

                        <Divider />
                        <div class="flex justify-between">
                            <p>Total ({{ numberValue }} items)</p>
                            <p class="font-bold">${{ calculatedTotal }}</p>
                        </div>
                        <div class="py-4  mt-4">
                            <Button label="Add To Cart" outlined size="large" />
                            <Button class="ml-4" label="Buy Now" size="large" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
import Sidebar from "@/components/Sidebar.vue";
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';

const numberValue = ref(1);
const albumPrice = ref(50.92);

const calculatedTotal = computed(() => {
    const total = numberValue.value * albumPrice.value;
    return total.toFixed(2);
});

const increment = computed(() => {
    numberValue.value++;
});

const decrement = computed(() => {
    numberValue.value--;
});

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

.input-number {
    width: 10px !important;
}

/* 
.p-paginator .p-component {
    background: red !important;
} */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>