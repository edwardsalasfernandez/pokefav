<template>
  <div class="List fill-height">
    <loading v-if="loading"></loading>
     <v-container
            v-else 
              class=""
              fluid
              fill-height
          >
          <v-row class="fill-height align-content-space-between justify-center" >
              <v-col lg="6">
                <v-text-field
                    solo
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    v-model="search"
                ></v-text-field>

                <v-list v-if="filterPokemons.length > 0">
                    <v-list-item-group
                        color="primary"
                    >
                     <v-list-item
                        v-for="(pokemon, i) in filterPokemons"
                        :key="i"
                        @click="dialogOpen(pokemon.url)"
                        >
                         <v-list-item-content>
                            <v-list-item-title class="text-capitalize" v-text="pokemon.name"></v-list-item-title>
                        </v-list-item-content>
                         <v-list-item-icon @click.stop="favorite(pokemon.name)">
                            <v-icon :color="pokemon.favorite ? 'yellow darken-2':'grey darken-2'">mdi-star</v-icon>
                        </v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <error v-else @change="search = ''"></error>

                <v-toolbar v-if="filterPokemons.length > 0">
                    <v-btn @click="showFavorities = false" rounded
                  dark class="text-capitalize" >
                        <v-icon>mdi-format-list-bulleted-square</v-icon>
                  All
                    </v-btn>

                    <v-btn @click="showFavorities = true"  rounded
                  dark class="text-capitalize"  >
                        <v-icon>mdi-star</v-icon>
                  Favorites
                    </v-btn>
                </v-toolbar>

                <v-dialog
                    v-model="dialog"
                    width="500"
                    >
                        <div class="modal__pokemon-img">
                            <v-img height="220" src="@/assets/img/background-pokemons.png"></v-img>
                            <v-img widht="180" height="180" contain class="modal__pokemon-img-fixed" v-if="pokemon.sprites" :src="pokemon.sprites.front_default"></v-img>
                        </div>
                        <v-card>
                        <v-card-text class="pa-0 text-capitalize">
                            Name: {{pokemon.name}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="pa-0 text-capitalize">
                            Weight: {{pokemon.weight}}
                        </v-card-text>
                        <v-divider></v-divider>
                           <v-card-text class="pa-0 text-capitalize">
                              Height: {{pokemon.height}}
                        </v-card-text>
                        <v-divider></v-divider>
                           <v-card-text  v-if="pokemon.types" class="pa-0 text-capitalize">
                            Types: {{ pokemon.types.map( el => {
                                return el.type.name;
                            }).join(', ')}}
                        </v-card-text>
                        <v-divider></v-divider>
                      
                        

                        <v-card-actions class="mt-5">
                             <v-btn
                            color="primary"
                            class="text-capitalize"
                            dark
                            rounded
                            @click="dialog = false"
                        >
                            Share to my friends
                        </v-btn>
                        <v-spacer></v-spacer>
                         <v-btn
                            icon
                            v-if="pokemon.name"
                            :color="isFavorite(pokemon.name) ? 'yellow' : 'grey'"
                            @click.stop="favorite(pokemon.name)"
                            >
                            <v-icon>mdi-star</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>

              </v-col>
          </v-row>
     </v-container>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Error from "@/components/Error.vue";
const axios = require('axios');

export default {
  name: "List",
  components: {
    Loading,
    Error,
  },
  data() {
    return {
      loading: true,
      pokemons: [],
      pokemon:{},
      search:'',
      showFavorities:false,
      dialog:false
    };
  },
   created: function () {
    //    this.loading = false;
       this.getPokemons();
    },
    methods: {
        async getData(url){

            let dataResponse = []

            await axios.get(url)
            .then(function (response) {
                // handle success
                if(response.data.results){
                    dataResponse = response.data.results;
                }
                else{
                    dataResponse = response.data;
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

            return dataResponse;

        },
        async getPokemons(){
            this.pokemons =  await this.getData('https://pokeapi.co/api/v2/pokemon');
            return this.pokemons;
        },
        async getPokemon(url){
            this.pokemon = await this.getData(url);
            return this.pokemon; 
        },
        dialogOpen(url){
            this.pokemon = {};
            this.getPokemon(url);
            // this.pokemon = Object.assign({}, this.pokemon);
            this.dialog = true;
        },
        favorite(name){
            this.pokemons.find((pokemon,i) => {
                if( pokemon.name == name){
                    if(pokemon.favorite){
                        pokemon.favorite = false;
                    }
                    else{
                        pokemon.favorite = true;
                    }
                }
                return pokemon.name == name;
            });
 
            this.pokemons = Object.assign([], this.pokemons);
                
        },
        isFavorite(name){
           let pokemon =  this.pokemons.find((pokemon,i) => {
              
                return pokemon.name == name;
            });

            return pokemon.favorite;
        }
    },
    watch: {
        // getPokemon() {
        //     this.pokemon = Object.assign({}, this.pokemon);
        // }
    },
    computed:{
        haspokemons(){
            if (this.pokemons.length > 0){
                 this.loading = false;
                return false;
            }
            else{
                 this.loading = true;
                return true;
            }

        },
        filterPokemons(){
            let pokemonsFiltered = this.pokemons;

            if(this.showFavorities){
                pokemonsFiltered = pokemonsFiltered.filter((pokemon) => {
                    return pokemon.favorite;
                })
            }

            if(this.search != ''){
                pokemonsFiltered = pokemonsFiltered.filter((pokemon) => {
                    return pokemon.name.toLowerCase().match(this.search);
                })
            }
    
            return pokemonsFiltered;

        }
    }
    
};
</script>
