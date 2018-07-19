import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/home.vue'
import rankingList from '../views/rankingList/rankingList.vue'
import dynamic from '../views/dynamic/dynamic.vue'
import my from '../views/my/my.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      alias:'/',
      name: 'home',
      component: home
    },
    {
      path: '/rankingList',
      name: 'rankingList',
      component: rankingList
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
