<template>
  <div class="Welcome fill-height">
         <v-container
              class=""
              fluid
              fill-height
          >
          <v-row class="fill-height align-content-space-around justify-center" >
             <v-col lg="4" class="text-center" >
                <v-img  
                max-height="288"
                max-width="325" 
                src="@/assets/img/pikachu.png"
                class="img-welcome mx-auto" ></v-img>
                <h4 class="welcome__text--title my-6">Welcome to Pokédex</h4>
                <p class="welcome__text my-8">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
                <v-btn
                  class="btn-red"
                  color="#F22539"
                  rounded
                  dark
                  to="/List"
                >Get started</v-btn>
            </v-col>
          </v-row>
        </v-container>
    
  </div>
</template>

<style lang="scss">
  .welcome{
    height: 100vh;
     &__text{
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      color: #5E5E5E;
      &--title{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
      }
    }

  }

  .btn-red{
    background: #F22539;
  }
  
</style>

<script>

export default {
  name: 'Home',
}
</script>
