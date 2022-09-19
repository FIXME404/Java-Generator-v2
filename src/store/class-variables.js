import { createSlice } from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

const initialClassVariablesState = { variables: [{ id: nextId(), type: '', name: '', includesGetter: false, includesSetter: false }] };

const classVarSlice = createSlice({
  name: 'class-variables',
  initialState: initialClassVariablesState,
  reducers: {
    // FINDS THE INDEX OF VARIABLE IN THE VARIABLES ARRAY AND REPLACES ITS CONTENT WITH NEW GIVEN CONTENT
    updateVariable: (state, action) => {
      const updatedVariables = state.variables.map(variable => {
        if (action.payload.id === variable.id) {
          return action.payload;
        }
        return variable;
      });
      state.variables = updatedVariables;
    },

    // ADDS A NEW VARIABLE TO THE VARIABLES ARRAY TO BE DISPLAYED IN THE UI
    addVariable: state =>
      void state.variables.push({
        id: nextId(),
        type: '',
        name: '',
        includesGetter: false,
        includesSetter: false
      }),

    //REMOVES THE VARIABLE FROM THE VARIABLES ARRAY
    removeVariable: (state, action) => void (state.variables = state.variables.filter(variable => variable.id !== action.payload))
  }
});

export const classVariablesActions = classVarSlice.actions;

export default classVarSlice.reducer;
