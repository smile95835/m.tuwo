import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/home.vue'
import rankingList from '../views/rankingList/rankingList.vue'
import dynamic from '../views/dynamic/dynamic.vue'
import relevant from '../views/dynamic/relevant.vue'
import recommend from '../views/dynamic/recommend.vue'
import follow from '../views/dynamic/follow.vue'
import my from '../views/my/my.vue'
import ArticleDetail from '../views/dynamic/commen/ArticleDetail.vue'

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
      component: dynamic,
      children:[
        {
          path: 'relevant',
          name: 'relevant',
          component: relevant
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: 'follow',
          name: 'follow',
          component: follow
        }
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/articledetail',
      name: 'articledetail',
      component: ArticleDetail
    }
  ]
})
