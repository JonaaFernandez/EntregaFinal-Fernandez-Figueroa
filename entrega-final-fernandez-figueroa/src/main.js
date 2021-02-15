import Vue from 'vue';
import App from './App.vue';
import HomePage from './components/HomePage';
import Historia from './components/Historia';
import VueRouter from 'vue-router';
import Tickets from './components/Tickets';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const routes = [
    { path: "/", component: HomePage },
    { path: "/historia", component: Historia },
    { path: "/Tickets", component: Tickets },
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