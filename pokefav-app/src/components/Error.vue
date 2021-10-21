<template>
  <div class="Error text-center">
      <div>
        <h4 class="Error__text--title my-8">Uh-oh!</h4>
        <p class="Error__text my-8">You look lost on your journey!</p>
      </div>
       <v-btn
                  class="btn-red"
                  color="#F22539"
                  rounded
                  dark
                  to="/List"
                  @click="$emit('change','reset')"
                  
                >Go back home</v-btn>
  </div>
</template>
<style lang="scss">
 .Error{
     &__text{
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #5E5E5E;
      &--title{
        font-weight: 700;
        font-size: 36px;
        line-height: 43px;
      }
    }

  }
</style>
<script>
export default {
  name: 'Error',
//   props: {
//     msg: String
//   }
}
</script>