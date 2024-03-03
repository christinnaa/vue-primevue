<template>
    <div class="h-14 flex items-center justify-between">
        <img src="../assets/wvlogo.png" alt="">
        <div class="hidden md:flex">
            <Button type="button" icon="pi pi-user" :label="username" class="text-sm text-teal-500 bg-neutral-200 border-0"
                @click="toggle" />

            <OverlayPanel ref="op">
                <div class="flex flex-column">
                    <router-link to="/">
                        <div class="hover:bg-neutral-100 w-24 flex justify-center cursor-pointer py-1 rounded-md">
                            <span class="font-medium text-900 block">Log Out</span>
                        </div>
                    </router-link>
                </div>
            </OverlayPanel>
        </div>
        <div class="flex md:hidden">
            <!-- <Button type="button" icon="pi pi-user" :label="username" class="text-sm bg-teal-400 border-0"
                @click="toggle" /> -->
            <Avatar icon="pi pi-user" style="background-color: #2dd4bf; color: #ffffff" @click="toggle" />
            <OverlayPanel ref="op">
                <div class="flex flex-column">
                    <router-link to="/">
                        <div class="hover:bg-neutral-100 w-24 flex justify-center cursor-pointer py-1 rounded-md">
                            <span class="font-medium text-900 block">Log Out</span>
                        </div>
                    </router-link>
                </div>
            </OverlayPanel>
        </div>
        <!-- <div class="mr-2">
            <Avatar icon="pi pi-user" class="mr-2" style="background-color: #2dd4bf; color: #ffffff" shape="circle" />
        </div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import OverlayPanel from 'primevue/overlaypanel';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const op = ref();
const username = ref("Na Jaemin")

const toggle = (event) => {
    op.value.toggle(event);
}
</script>

<style></style>