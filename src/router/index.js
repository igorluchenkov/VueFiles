import Vue from 'vue';
import Router from 'vue-router';
import FilesContainer from '@/components/FilesContainer/FilesContainer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'FilesContainer',
      component: FilesContainer
    }
  ]
});
