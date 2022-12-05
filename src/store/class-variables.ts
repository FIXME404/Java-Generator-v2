import { createSlice } from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

// Initial class variable state
const initialClassVariablesState = { id: nextId(), type: '', name: '', includesGetter: false, includesSetter: false };

// Initial class variables state array that stores all class variables specified in the app
const initialState = [initialClassVariablesState];

// Class variables slice of the store
const classVarSlice = createSlice({
  name: 'class-variables',
  initialState,
  reducers: {
    // Finds the index of variable that is equal to the passed id in the array and replaces its content with new given content
    updateVariable: (state, action) => {
      state = state.map(variable => (action.payload.id === variable.id ? (variable = action.payload) : variable));
    },

    // Adds a new variable to the variables array
    addVariable: state => void state.push(initialClassVariablesState),

    // Removes the specified variable from the variables array
    removeVariable: (state, action) => void (state = state.filter(variable => variable.id !== action.payload))
  }
});

export const classVariablesActions = classVarSlice.actions;

export const { updateVariable, addVariable, removeVariable } = classVarSlice.actions;

export default classVarSlice.reducer;
