import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';



import CompanyIndexComponent from './components/CompanyIndexComponent.vue';
import InsuranceIndexComponent from './components/InsuranceIndexComponent.vue';
import UserIndexComponent from './components/UserIndexComponent.vue';
import VehicleIndexComponent from './components/VehicleIndexComponent.vue';




const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },

  /*Company Information*/
  {
    name: 'Companies',
    path: '/insurance_companies',
    component: CompanyIndexComponent
  },

  /*Insurance Information*/
  {
    name: 'Insurances',
    path: '/insurance_informations',
    component: InsuranceIndexComponent
  },

  /*User Information*/
  {
    name: 'Users',
    path: '/personal_informations',
    component: UserIndexComponent
  },

  /*Vehicle Information*/
  {
    name: 'Vehicles',
    path: '/vehicle_informations',
    component: VehicleIndexComponent
  },

  /*************************************/
  {
    name: 'Create',
    path: '/create',
    component: CreateComponent
  },

  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  }
]

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');