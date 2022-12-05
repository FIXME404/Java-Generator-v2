import React from 'react';
import { useSelector } from 'react-redux';
import { ClassVariablesState } from '../../store';
import nextId from 'react-id-generator';

function ClassVariablesGenerator() {
  // Get the class variables from the redux store
  const variables = useSelector((state: ClassVariablesState) => state);

  console.log(variables + ' variables');
  console.log(variables[0] + ' variables[0]');

  const textColorStyle = {
    color: 'DodgerBlue'
  };

  // Map over the variables array and return an JSX element for each variable that has a type or name
  const instanceVariables = variables.map(variable => {
    const { name, type } = variable;

    if (type.trim() !== '' || name.trim() !== '')
      return `\t\tprivate ${type} ${(
        <span style={textColorStyle} key={nextId()}>
          {name}
        </span>
      )};\n`;

    // If the variable has no type or name, return an empty string
    return '';
  });

  return <span>{instanceVariables}</span>;
}

export default ClassVariablesGenerator;
