import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/components/CommonLayout.vue'),
    children:[
      {
        path:'',
        component:()=>import('@/views/Home.vue'),
        name:'home'
      },
      {
        path:'/detail/:id',
        component:()=>import('@/views/Detail.vue')
      },
      {
        path:'/personal',
        component:()=>import('@/views/Personal.vue'),
        meta:{
          requireAuth: true, // 需要登录权限
        }
      },
      {
        path:'/article',
        component:()=>import('@/views/Article.vue'),
        meta:{
          requireAuth: true, // 需要登录权限
        }
      },
      {
        path:'/article/edit',
        name: 'editArticle',
        component:()=>import('@/views/ArticleEdit.vue'),
        meta:{
          requireAuth: true, // 需要登录权限
        }
      },
      {
        path:'/article/edit/:id',
        name: 'updateArticle',
        component:()=>import('@/views/ArticleEdit.vue'),
        meta:{
          requireAuth: true, // 需要登录权限
        }
      }
    ]
  },
  {
    path:'/login',
    component: () => import('@/views/Login.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
