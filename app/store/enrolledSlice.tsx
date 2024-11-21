import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: number;
  title: string;
  imgSrc: string;
  price: string;
}

interface EnrolledState {
  items: Course[];
}

const initialState: EnrolledState = {
  items: [],
};

const enrolledSlice = createSlice({
  name: 'enrolled',
  initialState,
  reducers: {
    enrollCourse(state, action: PayloadAction<Course>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromEnrolled(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { enrollCourse, removeFromEnrolled } = enrolledSlice.actions;
export default enrolledSlice.reducer;