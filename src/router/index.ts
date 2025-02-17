import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw} from 'vue-router'
const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'massage',
        name: 'Massage',
        meta:{
            title: '消息'
        },
        component: () => import('@/views/Massage.vue')
    },
    {
        path: 'contacts',
        name: 'Contacts',
        meta:{
            title: '通讯录',
        },
        component: () => import('@/views/Contacts.vue')
    },
    {
        path: 'workspace',
        name: 'Workspace',

        meta:{
            title: '工作台',
        },
        component: () => import('@/views/Workspace.vue')
    },
    {
        path: 'clouddocuments',
        name: 'CloudDocuments',
        meta:{
            title: '云文档',
        },
        component: () => import('@/views/CloudDocuments.vue')
    },
]
const routes :RouteRecordRaw[]  = [
    {
      path: '/',
      name: 'App',
      component: () => import('@/views/KeepAlive.vue'),
      redirect: '/massage',
      children: rootRoutes
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  router.beforeEach((to, from, next)=>{
    
    document.title = to.meta.title as string;
    next()

})
  export default router