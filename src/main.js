import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-teal/theme.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';
import Paginator from 'primevue/paginator';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';


const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use('Button', Button)
app.use('InputText', InputText)
app.directive('tooltip', Tooltip);
app.directive('Paginator', Paginator);
app.directive('Divider', Divider);
app.directive('InputNumber', InputNumber);
app.use('Menu', Menu)
app.mount('#app')
