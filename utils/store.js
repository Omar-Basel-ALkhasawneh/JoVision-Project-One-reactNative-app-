import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for managing text and visibility
const componentSlice = createSlice({
    name: 'component',
    initialState: {
        text: '',
        isVisible: true,
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        toggleVisibility: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
});

export const { setText, toggleVisibility } = componentSlice.actions;

const store = configureStore({
    reducer: {
        component: componentSlice.reducer,
    },
});

export default store;
