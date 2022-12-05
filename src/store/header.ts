import { createSlice } from '@reduxjs/toolkit';

// type for the action parameter passed into the reducer
type action = {
  type: string;
  payload: string;
};

// This is the initial state of the class header attributes slice of the store
const initialState = { name: '', extends: '', implements: '' };

// This is the class header attributes slice of the store
const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addName: (state, action: action) => void (state.name = action.payload),
    addExtends: (state, action: action) => void (state.extends = action.payload),
    addImplements: (state, action: action) => void (state.implements = action.payload)
  }
});

export const headerActions = headerSlice.actions;

export const { addName, addExtends, addImplements } = headerSlice.actions;

export default headerSlice.reducer;
