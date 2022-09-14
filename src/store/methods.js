import { createSlice } from '@reduxjs/toolkit';

const initialMethodsState = { methods: [{ id: 'm0', type: '', name: '' }] };

const methodsSlice = createSlice({
  name: 'method',
  initialState: initialMethodsState,
  reducers: {
    addMethod: (state, action) => void state.methods.push(action.payload),
    removeMethod: (state, action) =>
      void (state.methods = state.methods.filter(method => method.id === action.payload))
  }
});

export const methodsActions = methodsSlice.actions;

export default methodsSlice.reducer;
