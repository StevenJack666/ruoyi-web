// 引入ElementPlus所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlusX from 'vue-element-plus-x';
import App from './App.vue';
import router from './routers';
import store from './stores';
import './styles/index.scss';
import 'virtual:uno.css';
import 'element-plus/dist/index.css';
// SVG插件配置
import 'virtual:svg-icons-register';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(ElementPlusX);
app.use(store);

// 注册ElementPlus所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 这里 Pinia 已激活，可以安全注册拦截器
import { installJwtPlugin } from './utils/request';
installJwtPlugin();

app.mount('#app');