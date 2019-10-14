import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'
import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'
import Test from '@/components/TestPage'


Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/movie',
     name: 'index',
     component: Index
   },
   {
     path: '/movie/:id',
     name: 'show',
     component: Show
   }
 ]
})