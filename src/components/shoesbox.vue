<script setup>
import Popup from '@/components/popup.vue';
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

let quantity = ref(1);
let products = computed(() => {
    return store.getters.firstSixProducts;
});
</script>

<template>
    <Popup />

    <div class=" w-5/6 md:w-4/5 ">
   
        <div class="grid grid-cols-2  md:grid-cols-3 gap-1 gap-y-10 md:gap-y-20  lg:gap-y-20  text-sm min-h-max md:min-h-max md:text-base " >
        <div class="px-0  md:px-4"  v-for="(product, id) in products" :key="id">
            <div class=" flex flex-col  w-11/12 py-4 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 h-66 gap-y-3  bg-shoesbg md:leading-8  md:w-11/12 ">
                <div class="w-10/12 mx-auto h-36 md:h-60">
                    <img :src="product.image" class="  w-full h-36 mx-auto  md:w-52 md:h-56 rounded-xl " alt="">
                </div>
                <div class="flex flex-col rounded-b-2xl px-2 bg-shoesbg  w-full mx-auto  text-white fontfamily-inter text-semibold leading-6 h-66 gap-y-3 md:leading-4  md:w-11/12">
                    <p class=" truncate heighht ">{{ product.tittle }}</p>
                    <p  class=" ">{{ product.price }}</p>
                </div>
            </div>
            <div class="  w-11/12 mx-auto flex justify-center">
                <button  class="px-2 rounded-lg py-1 mt-0.5 w-8/12  text-white   mx-auto bg-redishbtn  md:w-8/12  shadow-md shadow-gray-400 font-medium" @click="store.dispatch('details', product.id)">View</button>
            </div>

        </div>
        
        </div>
    </div>
</template>