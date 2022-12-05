import React from 'react';
import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';
import { MethodsState } from '../../store';

function MethodsGenerator() {
  // Get the methods from the redux store
  const methods = useSelector((state: MethodsState) => state.methods);

  const methodNameColor = {
    color: 'DarkCyan'
  };

  const parameterTextColor = {
    color: 'lightsalmon'
  };

  const commentTextColor = {
    color: 'DarkSlateGray'
  };

  const returnTextColor = {
    color: 'Hotpink'
  };

  const generatedCode = methods.map(method => {
    // Destructure the method object
    const { returns, name, params, isMethodPrivate } = method;
    // Adds private if the method is private and its return type if it has one
    const methodVisibility = isMethodPrivate ? 'private' : 'public';
    const methodReturn = returns.trim() !== '' ? returns : 'void';

    // Map over the params array and return an JSX element for each parameter
    if (name.trim() !== '' || returns.trim() !== '')
      return (
        <>
          <JavaDocGenerator name={name} params={params.split(',')} returns={returns} />
          {methodVisibility} {methodReturn} <span style={methodNameColor}>{name}</span>(<span style={parameterTextColor}>{params}</span>)
          {` {
            return `}
          <span style={returnTextColor}>{returns.trim() !== '' && returns !== 'void' ? 'new' + returns.charAt(0).toUpperCase() + returns.slice(1) + '()' : ''}</span>
          {`;
            }\n\n`}
        </>
      );
  });

  return (
    <span>
      {`${generatedCode}
      }\n`}
    </span>
  );
}

export default MethodsGenerator;
