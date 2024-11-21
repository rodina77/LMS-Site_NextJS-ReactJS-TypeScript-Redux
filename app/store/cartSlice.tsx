import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: number;
  title: string;
  imgSrc: string;
  price: string;
  quantity: number;
}

interface CartState {
  items: Course[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Course>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeOneFromCart(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      } else {
        state.items = state.items.filter(item => item.id !== action.payload); 
      }
    }
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;
