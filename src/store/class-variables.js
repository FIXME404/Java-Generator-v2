import { createSlice } from '@reduxjs/toolkit';

const initialClassVariablesState = { variables: [{ id: 'v0', type: '', name: '' }] };

const classVarSlice = createSlice({
  name: 'class-variables',
  initialState: initialClassVariablesState,
  reducers: {
    // Updates current inputed value in the input field
    updateVariable: (state, action) => {
      if (state.variables.length === 0) {
        state.variables.push(action.payload);
      } else {
        const updatedVariables = state.variables.map(variable => {
          if (action.payload.id === variable.id) {
            return action.payload;
          }
          return variable;
        });
        state.variables = updatedVariables;
      }
    },

    //Adds a new input field to the UI
    addVariable: (state, action) => void state.variables.push('v' + (state.variables.length + 1)),

    //Removes a specified input field from the UI
    removeVariable: (state, action) => {
      console.log(action.payload);
      void (state.variables = state.variables.filter(variable => {
        console.log(variable.id, action.payload.id);
        return variable.id === action.payload.id;
      }));
    }
  }
});

export const classVariablesActions = classVarSlice.actions;

export default classVarSlice.reducer;
