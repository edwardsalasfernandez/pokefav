<template>
  <div class="Loading fill-height">
      <v-container
              class=""
              fluid
              fill-height
          >
          <v-row class="fill-height align-content-space-around justify-center" >
            <v-img  
                max-height="106"
                max-width="106" 
                src="@/assets/img/Loader.png"
                class="img-welcome mx-auto animatedToFadeInAndOut" ></v-img>
          </v-row>
      </v-container>
  </div>
</template>

<style lang="scss">
    .animatedToFadeInAndOut {
        -webkit-animation: fadeinout 4s ease-in-out infinite;
        animation: fadeinout 4s ease-in-out infinite;
    }
    @-webkit-keyframes fadeinout {
    0%,100% { opacity: 0;
    transform: rotate(0deg);
    }
    50% { opacity: 1;
    transform: rotate(1080deg); }
    }

    @keyframes fadeinout {
     0%,100% { opacity: 0;
    transform: rotate(0deg);
    }
    50% { opacity: 1;
    transform: rotate(1080deg); }
    }
</style>

<script>
export default {
  name: 'Loading',
//   props: {
//     msg: String
//   }
}
</script>