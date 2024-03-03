
<template>
    <div class="h-fit py-6 w-20 rounded-2xl bg-white flex flex-col items-center justify-center gap-5 sticky">
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
            <Button :class="{ 'active': $route.path === '/shop' || $route.path === '/item' }" v-tooltip="{
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
        <!-- <router-link to="/">
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
        </router-link> -->
    </div>
</template>

<script setup>
import { ref } from "vue";
import Button from 'primevue/button';

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
</style>