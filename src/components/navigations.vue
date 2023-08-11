<script setup>
import { ref } from 'vue';

let activeClass = ref(true)
// const offClass = ref('notactive')

function toggle() {
    activeClass.value = !activeClass.value
    console.log(activeClass.value);
   
}

</script>
<template>
   <header class="sticky top-0 bg-firstred shadow-lg ">
    <!-- navbar -->
    <nav class="relative flex-nowrap sm:flex-wrap mx-auto p-2">
        <div class="flex items-center justify-between  text-white ">
            <div class="pt-1 md:pt-2  "> 
            <svg width="79" class=" h-16 md:w-24 md:h-18" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_11_1125)">
<path d="M60.6085 64.0445C54.5059 68.5803 47.1 71.0202 39.4966 70.9999C19.8604 70.9999 4 55.1108 4 35.4999C4 15.8619 19.8876 1.3004e-05 39.4966 1.3004e-05C48.2542 -0.00748869 56.7038 3.23091 63.2135 9.08971C63.2938 9.1629 63.3488 9.2598 63.3703 9.36634C63.3918 9.47287 63.3788 9.5835 63.3331 9.68213C63.2875 9.78077 63.2116 9.86228 63.1165 9.91483C63.0213 9.96738 62.9119 9.98823 62.8041 9.97435C60.1135 9.61508 57.4016 9.43908 54.6872 9.44757C36.1717 9.44757 22.8547 17.1015 22.8547 31.6851C22.8547 47.2879 36.0414 52.5671 48.1647 57.2694C52.9796 59.1303 57.5255 60.8996 60.6171 63.2228C60.6805 63.2706 60.732 63.3324 60.7674 63.4035C60.8029 63.4745 60.8213 63.5528 60.8213 63.6322C60.8213 63.7116 60.8029 63.7899 60.7674 63.861C60.732 63.932 60.6805 63.9938 60.6171 64.0416L60.6085 64.0445ZM74.8501 32.2205C74.8375 32.0848 74.7723 31.9594 74.6683 31.8712C67.2598 25.716 61.2683 23.2138 53.9887 23.2138C41.947 23.2138 42.5024 30.6817 42.5024 30.8907C42.5024 36.9886 49.9538 39.7657 58.5818 42.985C63.0289 44.644 67.6262 46.3589 71.8472 48.7008C71.9106 48.7347 71.9804 48.7549 72.0521 48.76C72.1237 48.7651 72.1957 48.7551 72.2633 48.7305C72.3308 48.7059 72.3924 48.6674 72.444 48.6173C72.4956 48.5673 72.5361 48.507 72.5629 48.4402C74.574 43.2846 75.3571 37.7313 74.8501 32.2205Z" fill="white"/>
<path d="M62.8041 9.97435L62.868 9.47844C62.8703 9.47874 62.8727 9.47829 62.8747 9.47717L63.1165 9.91483L62.8747 9.47717C62.8767 9.47604 62.8784 9.47429 62.8794 9.47216L63.3331 9.68213L62.8794 9.47214C62.8804 9.47002 62.8806 9.46763 62.8802 9.46532C62.8799 9.46391 62.8793 9.46258 62.8786 9.4614C62.8781 9.46075 62.8776 9.46015 62.8771 9.4596C56.4596 3.68464 48.1301 0.492618 39.497 0.500013L39.4966 0.500013C20.1635 0.500013 4.5 16.1382 4.5 35.4999C4.5 54.8349 20.1368 70.4999 39.4966 70.4999H39.498C46.9934 70.52 54.2943 68.1147 60.3102 63.6432L60.3209 63.6352C60.3212 63.6342 60.3213 63.6332 60.3213 63.6322C60.3213 63.6303 60.3208 63.6284 60.32 63.6266L54.6872 9.44757C57.4016 9.43908 60.1135 9.61508 62.8041 9.97435ZM62.8041 9.97435L62.8703 9.47875C60.1575 9.11651 57.4232 8.93905 54.6864 8.94757L62.8041 9.97435ZM53.9887 23.7138C61.1178 23.7138 66.9994 26.1504 74.3455 32.2531C74.3464 32.2539 74.3472 32.2548 74.3479 32.2557C74.3503 32.2588 74.3519 32.2626 74.3522 32.2666C74.8519 37.6988 74.0803 43.1727 72.0984 48.255C72.0979 48.2562 72.0971 48.2573 72.0961 48.2582C72.095 48.2593 72.0937 48.2601 72.0922 48.2607C72.0908 48.2612 72.0892 48.2614 72.0877 48.2613C72.0872 48.2613 72.0868 48.2612 72.0864 48.2611C72.0856 48.261 72.0849 48.2607 72.0842 48.2604C67.8333 45.9028 63.2105 44.1781 58.7779 42.5245L58.7566 42.5165C58.7566 42.5165 58.7565 42.5165 58.7565 42.5165C54.4259 40.9007 50.4617 39.4199 47.5737 37.5947C44.695 35.7753 43.0024 33.6893 43.0024 30.8907C43.0024 30.8853 43.0021 30.8759 43.0016 30.8625C42.9929 30.6075 42.9355 28.9289 44.1353 27.2665C45.3799 25.5421 48.0743 23.7138 53.9887 23.7138Z" stroke="black"/>
</g>
<defs>
<filter id="filter0_d_11_1125" x="0" y="0" width="79" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1125"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1125" result="shape"/>
</filter>
</defs>
            </svg>
            </div>
            <div class="hidden md:flex space-x-6 lg:space-x-6 lg:pr-4">
            <p class="text-lg hover:text-verydarkred hover:cursor-pointer"><RouterLink to="/newarrivals">New Arrivals</RouterLink></p>
            <p class="text-lg hover:text-verydarkred hover:cursor-pointer">Men</p>
            <p class="text-lg hover:text-verydarkred hover:cursor-pointer"> Women</p>
            <p class="text-lg hover:text-verydarkred hover:cursor-pointer"> Brands</p>
            <input type="text" class="px-1 text-black outline-none hidden md:inline">
            <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2.5" x2="42" y2="2.5" stroke="white" stroke-width="5"/>
            <line y1="15.5" x2="42" y2="15.5" stroke="white" stroke-width="5"/>
            <line y1="28.5" x2="42" y2="28.5" stroke="white" stroke-width="5"/>
            </svg>
            </div>
            <!-- hamburger icon -->
            <button id="menu-btn" @click="toggle()" class= "block hamburger focus:outline-none mr-5  md:hidden ">
                <svg width="42"  class=" h-8 md:24"  height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="2.5" x2="42" y2="2.5" stroke="white" stroke-width="5"/>
                <line y1="15.5" x2="42" y2="15.5" stroke="white" stroke-width="5"/>
                <line y1="28.5" x2="42" y2="28.5" stroke="white" stroke-width="5"/>
            </svg>
            </button>
        </div>
        <!-- mobile menu -->
        <div class="md:hidden">
            <div id="menu" class="absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-firstred text-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" :class="{'open':activeClass}">
                <p class="text-lg hover:text-verydarkred hover:cursor-pointer"> New Arrivals</p>
                <p class="text-lg hover:text-verydarkred hover:cursor-pointer">Men</p>
                <p class="text-lg hover:text-verydarkred hover:cursor-pointer"> Women</p>
                <p class="text-lg hover:text-verydarkred hover:cursor-pointer"> Brands</p>
                <input type="text" class="px-1 text-black outline-none w-48">
            </div>
        </div>
    </nav>
   </header>
   <!-- my cartpart -->
  
</template>



