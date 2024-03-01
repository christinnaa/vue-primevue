
<template>
    <div class="w-screen bg-neutral-50 flex">
        <div class="h-screen w-24 flex justify-end items-center bg-neutral-50">
            <Sidebar />
        </div>
        <div class="grow flex-col px-8">
            <Header />
            <div class="container mx-auto mt-4">
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div class="flex justify-center items-center p-2">
                        <img class="w-5/6" src="../assets/seventeenth-heaven-big.png" alt="">
                    </div>
                    <div class="px-5 py-2">
                        <h1 class="font-bold text-sm">SEVENTEEN</h1>
                        <h2 class="text-lg">11th Mini Album 'SEVENTEENTH HEAVEN' (Set)</h2>
                        <p class="font-bold text-xl mt-4">$50.92</p>
                        <Divider />
                        <p>Set</p>
                        <div class="mt-3 flex justify-between items-center pr-2">
                            <div>
                                <button @click="decrement"
                                    class="bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-tl-lg rounded-bl-lg">
                                    -
                                </button>
                                <input type="number" v-model.number="numberValue"
                                    class="appearance-none bg-white rounded-none py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 w-14 text-center">
                                <button @click="increment"
                                    class="bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-tr-lg rounded-br-lg">
                                    +
                                </button>
                            </div>
                            <div>
                                <p class="text-sm">${{ albumPrice }}</p>
                            </div>
                        </div>
                        <Divider />
                        <div class="bg-gray-100 p-2 rounded-md flex items-center text-gray-400 text-sm">
                            <i class="pi pi-exclamation-circle px-2"></i>
                            <p>You can order up to 7 items.</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <p>Total ({{ numberValue }} items)</p>
                            <p class="font-bold">${{ calculatedTotal }}</p>
                        </div>
                        <div class="py-4  mt-4">
                            <Toast />
                            <Button label="Add To Cart" @click="show()" outlined size="large" />
                            <Button class="ml-4" label="Buy Now" size="large" />
                        </div>
                    </div>
                </div>
                <!-- <Divider /> -->
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
import Header from "@/components/Header.vue";
import InputNumber from 'primevue/inputnumber';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';

const toast = useToast();
const numberValue = ref(1);
const albumPrice = ref(50.92);
const minOrder = 1;
const maxOrder = 7;

const show = () => {
    toast.add({ severity: 'success', summary: 'Successfully Added to Cart', detail: 'SEVENTEEN 11th Mini Album Added to Cart', life: 3000 });
};

const calculatedTotal = computed(() => {
    const total = numberValue.value * albumPrice.value;
    return total.toFixed(2);
});

const increment = () => {
    if (numberValue.value < maxOrder) {
        numberValue.value++;
    }
};

const decrement = () => {
    if (numberValue.value > minOrder) {
        numberValue.value--;
    }
};

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