import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import University from '../views/University.vue'
import About from '../views/About.vue'
import EditPost from '../views/EditPost.vue'
import Post from '../views/Post.vue'
import Test from '../views/Test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-post',
    name: 'addPost',
    component: AddPost
  },
  {
    path: '/univeristy',
    name: 'university',
    component: University
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
