import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
/* views */
import HomePage from '../views/HomePage';
import Historia from '../views/Historia';
import Tickets from '../views/Tickets';
/* component */
import Noticias from './components/Noticias';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const routes = [ /* revisar  poner "name"*/ {
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


/* Directiva personalizada */
Vue.directive('directivaPersonalizada', function(el, binding) {
        el.style.backgroundColor = binding.value;
    })
    /* Filtro "..." para email */
Vue.filter('snippet', function(value) {
        return value.slice(0, 10) + "..."
    })
    /* Mayuscula como primer charAt en tabla */
Vue.filter('capitalize', function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    /* minuscula para los siguientes caracteres */
Vue.filter('minuscula', function(value) {
    return value.toLowerCase();
})




Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')