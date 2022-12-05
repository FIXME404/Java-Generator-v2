import React from 'react';
import { useSelector } from 'react-redux';
import { HeadersState } from '../../store';
import ClassVariablesGenerator from './ClassVariablesGenerator';

function HeaderCodeGenerator() {
  // Get the headers from the redux store
  const { name, extends: extend, implements: implement } = useSelector((state: HeadersState) => state);

  const hasName = name !== undefined && name.trim() !== '';
  const hasExtends = extend !== undefined && extend.trim() !== '';
  const hasImplements = implement !== undefined && implement.trim() !== '';

  const textColorStyle = {
    color: 'Coral'
  };

  const commentColorStyle = {
    color: 'DarkSlateGray'
  };

  // Class header template
  const classHeader = `/**
      * ${name} -- .
      *
      * <p> Description: </p>
      *
      * @ author
*/
    public class ${(<span style={textColorStyle}>{name}</span>)} 
  `;

  // Default Constructor method template
  const defaultConstructor = `/**
  * default constructor --
  *                                                                                                           
*/\npublic ${(<span style={textColorStyle}>{name}</span>)} {\n\n\t}\n\n`;

  return (
    <span>
      {/* If a name is entered, the class header will be generated. */}
      {hasName && classHeader}

      {/* If an extends value is entered, the class will extend the entered value. */}
      {hasExtends && `extend ${(<span style={textColorStyle}>{extend} </span>)} `}

      {/* If an implements value is entered, the class will implement the entered value. */}
      {hasImplements && `implement ${(<span style={textColorStyle}>{implement} </span>)} `}
      {`{\n`}

      {/* Generates the instance variables for the class */}
      <ClassVariablesGenerator />
      {/* If there is a name specified, display the default constructor method */}
      {hasName && defaultConstructor}
    </span>
  );
}

export default HeaderCodeGenerator;
