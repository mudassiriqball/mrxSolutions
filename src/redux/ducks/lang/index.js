import { createSlice } from '@reduxjs/toolkit';
import i18n from "i18next";

// Define a type for the slice state

// Define the initial state using that type
const initialState = localStorage.getItem('lang') || 'ar';

export const lang = createSlice({
    name: 'lang',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLangAction: (state, action) => {
            i18n.changeLanguage(action.payload);
            localStorage.setItem('lang', action.payload);
            return action.payload;
        },
    },
});

export const { setLangAction } = lang.actions;

export default lang.reducer;