<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right"> 
                <v-btn large class="teal accent-3"><router-link to="/meetups">
                View Meetups</router-link></v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left"> 
                <v-btn large class="teal accent-3">
                <router-link to="/meetup/new">Organize A meetup</router-link></v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                <v-carousel-item
                v-for="meetup in meetups"
                :key="meetupId"
                :src="meetup.meetupImageLink"
                >
                <div class="title">{{meetup.meetupTitle}}</div>
                </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mb-2">
            <v-flex xs12 class="text-xs-center"> 
                <p>Join our awesome meetups in Nairobi Kenya</p>
            </v-flex>
        
        </v-layout>

        
    </v-container>
</template>

<script>
export default {


data(){
    return{
        meetups: [
            {meetupImageLink: "https://micato-woz6qxzwhvcnrugsanv.netdna-ssl.com/wp-content/uploads/2018/09/Nairobi_Skyline-1110x700.jpg", meetupId: "78678",meetupTitle: "Java Meetup Nairobi" },
            {meetupImageLink: "https://victormatara.com/wp-content/uploads/2018/07/List-Of-Sub-Counties-In-Kisumu-County.jpg", meetupId: "786fg",meetupTitle: "Python Meetup Kisumu" },
            {meetupImageLink: "https://www.africanmeccasafaris.com/wp-content/uploads/rondoretreat1.jpg", meetupId: "78trt",meetupTitle: "Kotlin Meetup Kakamega" },
            
        ]
    }
}
}
</script>

<style scoped>
.title{
    position: absolute;
    bottom:50px;
    color:white;
}
</style>
