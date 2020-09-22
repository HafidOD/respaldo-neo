import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

import store from '../store/indexVuex'

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    beforeEnter: (to, from, next) => {
      if(store.state.Authenticated && localStorage.getItem('_token')){
        next()
      } else {
        next('/login')
      }
    },
    /* rutas que requieran autenticacion */
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    beforeEnter: (to, from, next) => {
      if(store.state.Authenticated && localStorage.getItem('_token')){
        next('/dashboard')
      } else {
        next()
        }
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/resetpassword',
        name: 'resetpassword',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/PasswordRecovery.vue'),
      },
      {
        path: '/emailreset',
        name: 'emailreset',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/EmailResetPassword.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'dashboard',
    component: AuthLayout,
    children: [
      {
        path: '*', component: NotFound
      }
    ]
  }
];

export default routes;
