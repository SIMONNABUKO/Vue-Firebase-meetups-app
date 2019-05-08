import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Meetups from './components/Meetup/Meetups.vue'
import CreateMeetup from './components/Meetup/CreateMeetup.vue'
import Signup from './components/User/Signup.vue'
import Login from './components/User/Login.vue'
import Profile from './components/User/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/user/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
