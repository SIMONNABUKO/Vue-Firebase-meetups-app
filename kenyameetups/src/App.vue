<template>
  <v-app>
  
  <v-toolbar dark class= "teal accent-3">

  <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" 
  class="hidden-sm-and-up">
  </v-toolbar-side-icon>
    <v-toolbar-title>
    <router-link to="/">KenyaDevMeetups</router-link>  
    </v-toolbar-title>
    
    <v-spacer>
    </v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      
        <v-btn flat  v-for="item in menuItems" :key="item.title" 
    router
    :to="item.link">
          
        <v-icon dark left> {{item.icon}}</v-icon>
        {{item.title}}</v-btn>
      
    </v-toolbar-items>
    
  </v-toolbar>
    <main>
      <router-view></router-view>
    </main>

  <v-navigation-drawer temporary v-model="sideNav">
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title" 
      router 
      :to="item.link">
        
        <v-list-tile-action>
          <v-icon> {{item.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>{{item.title}}</v-list-tile-content>
       
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      sideNav: false,
      menuItems:[
        
          {icon: "supervisor_account", title: "View Meetups", link: "/meetups"},
          {icon: "room", title: "Organize Meetup", link: "/meetups/new"},
          {icon: "person", title: "profile", link: "/user/profile"},
          {icon: "face", title: "Sign In", link: "/user/signup"},
          {icon: "lock_open", title: "Log In", link: "/user/login"}
      ]
    }
  }
}
</script>
