<template>
<v-container class="mt-5">
    <v-layout row wrap>
        <v-flex xs12>
            <v-container fluid>
                <v-layout row>
                    <v-flex xs5 sm4 sm3>
                        <v-card class="green">
                            <v-card-media>
                                <v-img
          src="https://micato-woz6qxzwhvcnrugsanv.netdna-ssl.com/wp-content/uploads/2018/09/Nairobi_Skyline-1110x700.jpg"
          aspect-ratio="2.75"
        ></v-img>
                            </v-card-media>
                        </v-card>
                    </v-flex>
                    <v-flex xs7 sm8 md9>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Java Developers Meetup Nairobi</h3>
                            <div>15th May 2019.</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat>
                                <v-icon left>arrow_forward</v-icon>
                                <router-link to="/meetups/1">
                            View Meetup</router-link></v-btn> 
                        </v-card-actions>

                    </v-flex>
                </v-layout>
            </v-container>
        
        
        </v-flex>

    </v-layout>
</v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>