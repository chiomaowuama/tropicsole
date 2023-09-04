<script setup>
import navigations from '../components/navigations.vue'
import footerpage from '../components/footerpage.vue'
import promoshoes from '../components/promoshoes.vue'
import shoesbox from '../components/shoesbox.vue'
import Popup from '@/components/popup.vue';
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore();


let products = computed(() => {
    return store.getters.firstSixProducts;
});
let shoedetails = computed(() => {
    return store.state.shoedetails;
});
let quantity = ref(1);

const popupTriggers = ref({
  buttonTrigger: false,
  timedTrigger: false,
});

const TogglePopup = (trigger, id = null) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
//   details(id);
    if (id){
        store.dispatch('details', id);
        
    }
    
    quantity.value = 1;
};
onMounted(() => {
    // allproducts();
    store.dispatch('allproducts')
})
</script>

<template>
  <navigations/>
    <main>
        <div class="">
            <img src="@/assets/largeshoe.png" alt="" class=" h-60 md:w-full md:h-3/5">
        </div>
        <!-- promo section -->

        <promoshoes/>
        <!-- recent reviews -->
        <div class=""> 
        <h2 class="text-textred fontfamily-inter text-xl font-semibold p-2 md:p-2">New Arrivals</h2>
        </div>
         <!-- recent shoes reviewed -->
        <div class="w-full grid grid-cols-2  md:grid-cols-4 gap-1 gap-y-12 md:gap-y-20">
            
            <div class="px-0  md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8 md:w-full ">
                    <img src="@/assets/firstshoe.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12  ">View</button>
                </div>
            </div>
            <div class="px-0 ">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8  md:w-full ">
                    <img src="@/assets/shoe2.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12">View</button>
                </div>
            </div>
            <div class="px-0  md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8 md:w-full ">
                    <img src="@/assets/shoe8.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12  ">View</button>
                </div>
            </div>
            <div class="px-0 md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8  md:w-full ">
                    <img src="@/assets/shoe4.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12">View</button>
                </div>
            </div>
            <div class="px-0  md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8 md:w-full ">
                    <img src="@/assets/shoe6.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12  ">View</button>
                </div>
            </div>
            <div class="px-0 md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8  md:w-full ">
                    <img src="@/assets/shoe7.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12">View</button>
                </div>
            </div>
            <div class="px-0  md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8 md:w-full ">
                    <img src="@/assets/brownshoe.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12  ">View</button>
                </div>
            </div>
            <div class="px-0 md:px-2">
                <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8  md:w-full ">
                    <img src="@/assets/shoe9.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                    <p class="text-center ">lorem lorem</p>
                    <p  class="text-center ">Rs.1050</p>
                    <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12">View</button>
                </div>
            </div>
      
        

        </div>
        <!-- promo section -->
        <promoshoes/>
      <!-- recent reviews -->
      <div class=""> 
      <h2 class="text-textred fontfamily-inter text-xl font-semibold p-2 md:p-2">New Arrivals</h2>
      </div>
      <!-- more shoes -->
      <div class="grid grid-cols-2  md:grid-cols-4 gap-1 gap-y-12 pb-10 md:gap-y-20 ">
        <div class="px-0  md:px-2">
            <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8 md:w-full ">
                <img src="@/assets/firstshoe.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                <p class="text-center ">lorem lorem</p>
                <p  class="text-center ">Rs.1050</p>
                <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12  ">View</button>
            </div>
        </div>
        <div class="px-0 ">
            <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8  md:w-full ">
                <img src="@/assets/shoe2.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                <p class="text-center ">lorem lorem</p>
                <p  class="text-center ">Rs.1050</p>
                <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12">View</button>
            </div>
        </div>
        <div class="px-0  md:px-2">
            <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8 md:w-full ">
                <img src="@/assets/shoe8.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                <p class="text-center ">lorem lorem</p>
                <p  class="text-center ">Rs.1050</p>
                <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12  ">View</button>
            </div>
        </div>
        <div class="px-0 md:px-2">
            <div class=" flex flex-col  bg-shoesbg w-11/12 mx-auto rounded-2xl text-white fontfamily-inter text-semibold leading-6 md:leading-8  md:w-full ">
                <img src="@/assets/shoe4.png" class="w-36 h-32 mx-auto md:w-48 md:h-32  " alt="">
                <p class="text-center ">lorem lorem</p>
                <p  class="text-center ">Rs.1050</p>
                <button  class="px-2 rounded-2xl py-1 w-8/12 mx-auto bg-redishbtn -mb-4 md:w-8/12">View</button>
            </div>
        </div>
      </div>     
    </main>
  <footerpage/>
</template>
