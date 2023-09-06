<template>
    <div class="popup" v-if="shoedetails != null">
        
        <div class="popup-inner">
            <!-- <slot /> -->
            <div class="fixed z-99 inset-0 bg-opacity-25 bg-black text-white flex flex-col align-middle ">
                <div class=" w-5/6 h-1/5 md:w-4/6  md:h-3/5 mx-auto bg-detailred  mt-44 md:mt-36  ">
                    <button @click="store.commit('singleProduct', null)" class="popup-close bg-shoesbg  w-5/6 md:w-full  justify-end flex pr-2  font-bold self-end mx-auto pt-1 fontfamily-inter  md:pr-10 md:text-xl">X</button>
                    <div class="flex flex-row pb-3 md:pb-7 gap-2 md:gap-0 bg-detailred">
                        <div class=" flex flex-row  bg-detailred py-1 text-white fontfamily-inter w-3/5 h-54 px-2  text-semibold leading-6  md:leading-8">
                            <img :src="shoedetails.image" class=" m-auto   w-full h-52 mx-auto  md:w-72 md:h-72  " alt="">
                        </div>
                        <div class=" flex flex-col text-white fontfamily-inter font-bold text-sm items-start w-3/5 space-y-2 overflow-y-auto h-60 scrollbar-thin scrollbar-thumb-black-200 md:w-4/5 md:scrollbar-thin md:scrollbar-thumb-black-200 md:h-72 ">
                            <p class="font-medium text-xs md:text-base fontFamily-inter ">Name: {{ shoedetails.title }} </p>
                            <p class=" font-medium text-xs md:text-base fontFamily-inter ">Description: {{ shoedetails.description }} </p>
                            <p  class="text-center  text-xs md:text-base font-medium fontFamily-inter  ">Price: {{ shoedetails.price }}</p>
                            <div>
                                <p class=" font-medium text-base fontFamily-inter">size</p>
                                <p class="bg-detailred border-2 border-black rounded-lg text-center">15</p>
                            </div>
                            <div class="flex flex-col w-2/4 mt-5 items-center justify-end self-end  ">
                                <div class="flex flex-row  h-8 w-14 justify-between   md:w-2/5  ">
                                    <p class="bg-redishbtn text-white fontfamily-inter font-semibold text-sm w-1/3 text-center self-center" @click="() => quantity > 1 ? quantity-- : null">-</p>
                                    <input type="number" class="bg-black text-xs w-1/3 text-white text-center self-center" placeholder="1" v-model="quantity" min="1" readonly>
                                    <p class="bg-redishbtn text-sm w-1/3 text-center self-center" @click="quantity++">+</p>
                                </div>

                            </div>
                            <div class=" w-3/5 flex justify-center bg-orangebtn rounded-lg py-2 text-sm font-bold">
                                <button  @click="cartDisplay(shoedetails.id, quantity)">Add to cart</button>
                            </div>

                        </div>
                        
                    </div>
                    
                    
                </div>
    

            </div>

        </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue'
import { computed, ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore();
let quantity = ref(1);

let shoedetails = computed(() => {
    return store.state.shoedetails;
});

function cartDisplay(id, quantity){
    store.dispatch('updateCart', {id: id, quantity: quantity});
    alert("Added to cart");
   
}

// const popupTriggers = ref({
//   buttonTrigger: false,
//   timedTrigger: false,
// });

// const TogglePopup = (trigger, id = null) => {
//   popupTriggers.value[trigger] = !popupTriggers.value[trigger];
// //   details(id);
//     if (id){
//         store.dispatch('details', id);
//     }
    
//     quantity.value = 1;
// };
</script>