import { createSlice } from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

// Initial Method state
const initialMethodState = { id: nextId(), returns: '', name: '', params: '', isMethodPrivate: false };

// Initial Methods state array that stores all methods specified in the app
const initialState = { methods: [initialMethodState] };

// Methods slice of the store
const methodsSlice = createSlice({
  name: 'method',
  initialState,
  reducers: {
    //Finds the index of method in the array and replaces its content with new given content
    updateMethod: (state, action) => {
      state.methods = state.methods.map(method => (action.payload.id === method.id ? (method = action.payload) : method));
    },

    //Adds a new method to the methods array
    addMethod: state => void state.methods.push(initialMethodState),

    //Removes the specified method from the methods array
    removeMethod: (state, action) => void (state.methods = state.methods.filter(method => method.id !== action.payload))
  }
});

export const methodsActions = methodsSlice.actions;

export const { updateMethod, addMethod, removeMethod } = methodsSlice.actions;

export default methodsSlice.reducer;
