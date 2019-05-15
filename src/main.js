import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import store from './store';
import fetch from './plugins/fetch';
import Util from './libs/util';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import "./directive";
import i18n from './locale';
import App from './app.vue';
import Components from './components';
if (process.env.NODE_ENV !== 'production') require('./mock')

// 注册插件
Vue.use(VueRouter);
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value) // 国际化配置
});

Vue.prototype.$fetch = fetch;

// 组件注册
Components.forEach(component => {
  Vue.component(component.name, component);
});

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

// 实例化
new Vue({
  el: '#app',
  store,
  router: router,
  i18n,
  render: h => h(App)
});