<script setup>
import navigations from '../components/navigations.vue'
import footerpage from '../components/footerpage.vue'
import promoshoes from '../components/promoshoes.vue'
import shoesbox from '../components/shoesbox.vue'
import filternav from '../components/filternav.vue'
import slides from '../components/slides.vue'
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

// add to cart work

onMounted(() => {
    // allproducts();
    store.dispatch('allproducts', '')
})
</script>

<template>
    <navigations/>
    <div>
        <!-- bigpicture -->
        <slides/>
     
        <!-- the slide check -->
        <!-- the body -->
        <div class="flex">
            <filternav/>
            <shoesbox/>
        </div>

        <div>
             <promoshoes/>
        </div>
       
    </div>
    <footerpage/>
</template>