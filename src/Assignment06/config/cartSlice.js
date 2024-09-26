import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: []
    },
    reducers : {
        addItem : (state, action) => {
            //  we are directly mutating the state over here 
            state.items.push(action.payload)
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state, action) => {
            state.items.length = 0;
            // RTK says either mutate the existing state or return the new state
            // return []; or return { item : []} 
            // research on it.
            
        }

    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;