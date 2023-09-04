// data structure
// [
//     {
//         product_id: '1',
//         quantity: 1
//     },
//     {
//         product_id: '2',
//         quantity: 0
//     }
// ]

// where to store/retrieve data
// localStorage.setItem('cart', JSON.stringify(cart));



// implementation
// const cart = ref([]);

// function incrementButton(id) {
//     let existingProduct = cart.filter(item => item.product_id == id);
//     if (existingProduct.length > 0) {
        // existingProduct[0].quantity++;
        // find the existingProduct in the cart and increment the quantity
    // } else {
        // add the product to cart afresh
        // cart.push({
        //     product_id: id,
        //     quantity: 1
        // });
    // }

    // update local storage
// }

// function decrementButton(id) {
//     let existingProduct = cart.filter(item => item.product_id == id);
//     if (existingProduct.length > 0) {
//         let quantity = existingProduct[0].quantity;

        // if (quantity <= 1) {
            // remove the product entirely
        // } else {
            // decrement the quantity
        // }
    // }

    // update local storage
// }

// <button @click="incrementButton(product.id)">+</button>
// <button @click="decrementButton(product.id)">-</button>

// export default{
//     props: ['TogglePopup']
// }