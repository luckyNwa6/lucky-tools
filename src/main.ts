import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import { registerSW } from 'virtual:pwa-register';
import { plausible } from './plugins/plausible.plugin';

import 'virtual:uno.css';

import { naive } from './plugins/naive.plugin';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import App from './App.vue';
import router from './router';
import { i18nPlugin } from './plugins/i18n.plugin';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

registerSW();

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(createPinia());
app.use(createHead());
app.use(i18nPlugin);
app.use(router);
app.use(naive);
app.use(plausible);

app.mount('#app');
