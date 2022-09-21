import { createSlice } from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

const initialMethodsState = { methods: [{ id: nextId(), returns: '', name: '', params: '', isMethodPrivate: false }] };

const methodsSlice = createSlice({
  name: 'method',
  initialState: initialMethodsState,
  reducers: {
    // FINDS THE INDEX OF METHOD IN THE METHODS ARRAY AND REPLACES ITS CONTENT WITH NEW GIVEN CONTENT
    updateMethod: (state, action) => {
      const updatedMethods = state.methods.map(method => {
        if (action.payload.id === method.id) {
          return action.payload;
        }
        return method;
      });
      state.methods = updatedMethods;
    },

    // ADDS A NEW METHOD TO THE METHODS ARRAY TO BE DISPLAYED IN THE UI
    addMethod: state => void state.methods.push({ id: nextId(), returns: '', name: '', params: '', isMethodPrivate: false }),

    //REMOVES THE METHOD FROM THE METHODS ARRAY
    removeMethod: (state, action) => void (state.methods = state.methods.filter(method => method.id !== action.payload))
  }
});

export const methodsActions = methodsSlice.actions;

export default methodsSlice.reducer;
