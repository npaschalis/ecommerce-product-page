import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.quantity += action.payload;
    },
    emptyCart: state => {
      state.quantity = 0;
    }
  }
});

export const { addItems, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
