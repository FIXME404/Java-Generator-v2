import { createSlice } from '@reduxjs/toolkit';

const initialClassVariablesState = { variables: [] };

const classVarSlice = createSlice({
  name: 'class-variables',
  initialState: initialClassVariablesState,
  reducers: {
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
    removeVariable: (state, action) =>
      void (state.variables = state.variables.filter(variable => variable.id === action.payload.id))
  }
});

export const classVariablesActions = classVarSlice.actions;

export default classVarSlice.reducer;
