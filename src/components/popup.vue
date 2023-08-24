<template>
    <div class="popup">
        <div class="popup-inner ">
            <slot />
            <button @click="TogglePopup()" class="popup-close bg-shoesbg  w-5/6 md:w-4/6   flex  justify-center self-center mx-auto -mt-1">close popup</button>
        </div>
    </div>
    
</template>

<script>
export default{
    props: ['TogglePopup']
}
</script>