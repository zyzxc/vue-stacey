import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Collapse from '@/components/collapse'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: Collapse
    }
  ]
})
