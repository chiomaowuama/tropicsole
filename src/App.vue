<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex';
// import footer from './components/footer.vue';

const store = useStore();


onMounted(() => {
  // store.dispatch('allproducts')
  store.dispatch('loadCart')
})

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="flex flex-col min-h-screen font-inter bg-white text-black">
      <!-- <footer/> -->
      
      <RouterView/>     
    </div>
  </header>
 
</template>

<style  >
/* route transitions  */
/* .page-opacity-enter-active,
.page-opacity-leave-active{
  transition:600ms ease-in;
}
.page-opacity-enter-from
.page-opacity-leave-to{
  opacity:0;  
} */
</style>
