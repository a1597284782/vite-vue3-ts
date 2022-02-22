import { createRouter, createWebHashHistory } from "vue-router";
import Hello from '@/components/Hello.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ]
})