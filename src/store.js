import { createStore } from "vuex"

export default createStore({
    state: {
        allproducts: [],
        cart: [],
        shoedetails:null,
    },
    getters: {
        mapAllproducts(state){
            return state.allproducts.map(product => {
                return{
                    id: product.id,
                    tittle: product.title,
                    image: product.image,
                    price: product.price,
                };
                
            });
        },
        firstSixProducts(state, getters){
            return getters.mapAllproducts.slice(0, 6);
           
        },
        getCartProducts(state, getters) {
            return state.cart?.filter(item => {
                    let product = getters.mapAllproducts.filter(product => product.id == item.product_id);

                    return product.length;
                })
                .map(item => {
                    let product = getters.mapAllproducts.filter(product => product.id == item.product_id);

                    return {
                        id: product[0].id,
                        image: product[0].image,
                        price: product[0].price,
                        title: product[0].title,
                        quantity: item.quantity,
                    };
                })
        }
    },
    mutations: {
        updatteAllProduct(state,products){
            state.allproducts = products;
           
        },
        singleProduct(state, product){
            state.shoedetails = product;
        },
        updateCart(state, cart){
            state.cart = cart;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    },
    actions: {
        async allproducts(context) {
            let response = await fetch('https://fakestoreapi.com/products');
            let result = await response.json();
            context.commit('updatteAllProduct', result)
        },
        async details(context, id){
            let response = await fetch('https://fakestoreapi.com/products/' + id);
            let result = await response.json();
            context.commit('singleProduct' , result)
        },
        loadCart(context){
            let cart = localStorage.getItem('cart');
            if (cart) {
                context.commit('updateCart', JSON.parse(cart))
            }
        },
        updateCart(context, {id, quantity}) {
            let cart = context.state.cart;

            // check if id exists in cart
            let product = cart.filter(item => item.product_id == id);
            if (product.length < 1) {
                cart.push({
                    product_id: id,
                    quantity: quantity
                });
            } else {
                cart.filter(item => item.product_id == id)[0].quantity++;
            }
            
            context.commit('updateCart', cart)
        }
    }
})
