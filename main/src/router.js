import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import loadAsyncVueComponent from './loadAsyncVueComponent'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/header',
      name: 'outputHeader',
      component: () => {
        return new Promise(resolve => {
          // 引入服务器的js
          loadAsyncVueComponent('http://localhost:4000/output-header.umd.min.js')
            .then(component => {
              resolve(component)
            })
        })
      }
    }
  ],
});
