import React from 'react';
import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';
import nextId from 'react-id-generator';
import { ClassVariablesState } from '../../store';

function GettersSettersGenerator() {
  // Get the class variables from the redux store
  const variables = useSelector((state: ClassVariablesState) => state);

  const methodNameColor = {
    color: 'DarkCyan'
  };

  const returnTextColor = {
    color: 'Hotpink'
  };

  const commentTextColor = {
    color: 'DarkSlateGray'
  };

  const parameterTextColor = {
    color: 'lightsalmon'
  };

  const keyWordThisColor = {
    color: 'Orange'
  };

  const mappedVariables = variables.map(variable => {
    const { type, name, includesGetter, includesSetter } = variable;
    const nameInCamelCase = name.charAt(0).toUpperCase() + name.slice(1);

    let methods: any;

    // If the variable icludes a getter, create getter method text
    if (includesGetter)
      methods += (
        <>
          <JavaDocGenerator name={'get' + nameInCamelCase} returns={''} key={nextId()} />
          {`public ${type} ${(<span style={methodNameColor}> get{nameInCamelCase}</span>)} () {
            return ${(<span style={returnTextColor}>{name}</span>)};\n}\n\n`}
        </>
      );

    // If the variable icludes a setter, create setter method text
    if (includesSetter)
      methods += (
        <>
          <JavaDocGenerator name={'set' + nameInCamelCase} params={['']} key={nextId()} />
          {`public void ${(<span style={methodNameColor}> set{nameInCamelCase}</span>)} (${(
            <span style={parameterTextColor}>
              {type} {name}
            </span>
          )}) {\n`}
          <span style={keyWordThisColor}>this.</span>
          <span style={returnTextColor}>{name}</span> = <span style={returnTextColor}>{name}</span>
          {`;\n}\n\n`}
        </>
      );

    return <span key={nextId()}>{methods}</span>;
  });

  return <>{mappedVariables}</>;
}

export default GettersSettersGenerator;
