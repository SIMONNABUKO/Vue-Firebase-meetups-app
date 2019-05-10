<template>
    <v-container class="mt-5">
        <v-layout>
            <v-flex xs12>
                <v-card>
                    <v-card-title>Nairobi Meetup</v-card-title>
                    <v-card-media>
                        <v-img
                        src="https://micato-woz6qxzwhvcnrugsanv.netdna-ssl.com/wp-content/uploads/2018/09/Nairobi_Skyline-1110x700.jpg"
                        aspect-ratio="2.75"
                        ></v-img>
                    </v-card-media>
                    <v-card-text>
                        <div><h3>15th of May 2019 at iHub Nairobi-Kenya</h3></div>
                       <div>This meetup is going to take place at iHub Nairobi</div>
                        <v-card-actions>
                            <v-btn><router-link to="/meetups/1">Register</router-link></v-btn> 
                        </v-card-actions> 
                    </v-card-text>
                </v-card>
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
