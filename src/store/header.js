import { createSlice } from '@reduxjs/toolkit';

const initialHeaderState = { headers: { name: '', extends: '', implements: '' } };

const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    addName: (state, action) => void (state.headers.name = action.payload),
    addExtends: (state, action) => void (state.headers.extends = action.payload),
    addImplements: (state, action) => void (state.headers.implements = action.payload)
  }
});

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;
