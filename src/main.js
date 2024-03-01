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
import Avatar from 'primevue/avatar';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Chip from 'primevue/chip';
import OverlayPanel from 'primevue/overlaypanel';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import SpeedDial from 'primevue/speeddial';

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use('Button', Button)
app.use('InputText', InputText)
app.directive('tooltip', Tooltip);
app.directive('Paginator', Paginator);
app.directive('Divider', Divider);
app.directive('InputNumber', InputNumber);
app.directive('Avatar', Avatar);
app.directive('Toast', Toast);
app.directive('Chip', Chip);
app.directive('OverlayPanel', OverlayPanel);
app.directive('Dialog', Dialog);
app.directive('Dropdown', Dropdown);
app.directive('FloatLabel', FloatLabel);
app.directive('SpeedDial', SpeedDial);
app.use('Menu', Menu)
app.mount('#app')
app.use(ToastService);
