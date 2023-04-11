import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'


    const initialState = {
        cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem('cartItems')):[],
        // cartTotalQuantity:0,
        // cartTotalAmount:0,
    };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){

            // const itemIndex =state.cartItems.findIndex( item => item.id === action.payload.id);

            if(state.cartItems){
                // state.cartItems[itemIndex].cartQuantity += 1;
                // toast.info("Quantity Increased", {
                //     position:"bottom-right"
                // })
                state.cartItems=[];
                const tempProduct ={...action.payload};
                state.cartItems.push(tempProduct);
                toast.success(`₹${action.payload.price}plan added to cart`, {
                    position:"bottom-center"
                })


            }
            else{
                const tempProduct ={...action.payload};
                state.cartItems.push(tempProduct);
                toast.success(`₹${action.payload.price}plan added to cart`, {
                    position:"bottom-right"
                })
            }
            
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },
        clearCart(state,action){
            state.cartItems =[];
            toast.success("Cart Cleared", {
                position:"bottom-right"
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }

    },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;