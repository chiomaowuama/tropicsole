<script setup>

</script>
<template>
    <div class="  bg-sidenav w-24 md:w-1/5 rounded-r-3xl text-white pl-4  space-y-4 pb-4 min-h-max md:min-h-max"  >
        <h3 class="text-base font-bold fontfamily-inter  pt-6">Filter</h3>
        <div class="space-y-2 text-xs md:text-base">
            <p>Brand</p>
            <input type="text"  class="w-16 md:w-32 lg:w-44 ">
            <div class="space-x-1 ">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Goldstar</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Nike</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Jordan</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Adidas</label>
            </div>
            
        </div>
        <div class=" flex w-20  text-xs md:text-sm md:w-32 lg:w-44  ">
            <div class="rounded-full bg-line w-4 h-4"></div>
            <div class="w-3/5 bg-redishbtn  h-2 self-center md:w-full"></div>
            <div class="rounded-full  bg-line w-4 h-4 self-center"></div>
        </div>
        <div class=" flex flex-col w-16 text-xs md:text-sm md:w-32 lg:w-44">
            
            <div class="flex  justify-between ">
                <p class=" ">0</p>
                <p class="">5000</p>
            </div>
            <div class="flex bg-white text-black">
                <p class=" w-1/2">0</p>
                <p class="w-1/2 flex border border-black border-r-0 border-t-0 border-b-0 justify-end">5000</p>
            </div>
            
        </div>
        <div class="space-y-2 text-xs md:text-base">
            <p>Color</p>
            <input type="text" placeholder="Search Color" class="w-16 md:w-32 lg:w-44">
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Red</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Black</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox" >White</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">Pink</label>
            </div>
            
        </div>
        <div class="space-y-2 text-xs md:text-base ">
            <p>Size</p>
            <input type="text" placeholder="Search Size" class="w-16 md:w-32 lg:w-44">
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">32</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">31</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">33</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">34</label>
            </div>
            <div class="space-x-1">
                <input type="checkbox" name="checkbox" id="">
                <label for="checkbox">35</label>
            </div>
            
        </div>

    </div>

</template>