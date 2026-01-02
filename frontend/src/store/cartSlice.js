import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available
const savedCart = JSON.parse(localStorage.getItem("cart")) || {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const initialState = savedCart;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === item._id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }

            state.totalQuantity += 1;
            state.totalPrice += item.price;

            // Save to localStorage
            localStorage.setItem("cart", JSON.stringify(state));
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === i._id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.cartItems = state.cartItems.filter((i) => i.id !== id);
            }

            localStorage.setItem("cart", JSON.stringify(state));
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((i) => i._id === i._id);

            if (item) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;

                if (item.quantity === 0) {
                    state.cartItems = state.cartItems.filter((i) => i._id !== id);
                }
            }

            localStorage.setItem("cart", JSON.stringify(state));
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
