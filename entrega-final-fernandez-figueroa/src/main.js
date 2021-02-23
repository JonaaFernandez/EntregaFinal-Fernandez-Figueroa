import Vue from 'vue';
import VueRouter from 'vue-router';
/* secciones */
import App from './App.vue';

import HomePage from './components/HomePage';
import Historia from './components/Historia';
import Noticias from './components/Noticias';
import Tickets from './components/Tickets';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const routes = [ /* revisar  poner "name"*/

    {
        path: "/",
        name: "Homepage",
        component: HomePage
    },
    {
        path: "/historia",
        name: "historia",
        component: Historia
    },
    {
        path: "/tickets",
        name: "tickets",
        component: Tickets
    },
    {
        path: "/noticias",
        name: "noticias",
        component: Noticias
    },
];

const router = new VueRouter({
    routes
})

Vue.directive('directivaPersonalizada', function(el, binding) {
    el.style.backgroundColor = binding.value;
})

Vue.filter('snippet', function(value) {
    return value.slice(0, 10) + "..."
})
Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('minuscula', function(value) {
    return value.toLowerCase();
})




Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')