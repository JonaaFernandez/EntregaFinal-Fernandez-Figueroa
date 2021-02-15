import Vue from 'vue';
import VueRouter from 'vue-router';
/* secciones */
import App from './App.vue';
import HomePage from './components/HomePage';
import Historia from './components/Historia';
import Noticias from './components/Noticias';
import Tickets from './components/Tickets';
/* importamos bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const routes = [
    { path: "/", component: HomePage },
    { path: "/historia", component: Historia },
    { path: "/tickets", component: Tickets },
    { path: "/noticias", component: Noticias },
];

const router = new VueRouter({
    routes
})


Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')