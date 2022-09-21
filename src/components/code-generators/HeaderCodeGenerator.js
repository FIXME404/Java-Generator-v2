import { useSelector } from 'react-redux';
import ClassVariablesGenerator from './ClassVariablesGenerator';

function HeaderCodeGenerator() {
  const { name, extends: extend, implements: implement } = useSelector(state => state.headers.headers);

  const textColorStyle = {
    color: 'Coral'
  };

  const commentColorStyle = {
    color: 'DarkSlateGray'
  };

  const projectJavaDoc = `/**
      * ${name} -- .
      *
      * <p> Description: </p>
      *
      * @ author
*/
  `;

  const classHeader = (
    <span>
      {`     
  public class`}{' '}
      <span style={textColorStyle}>{name}</span>{' '}
      {extend.trim() !== '' ? (
        <>
          extend <span style={textColorStyle}>{extend} </span>
        </>
      ) : (
        ''
      )}
      {implement.trim() !== '' ? (
        <>
          implement <span style={textColorStyle}>{implement} </span>
        </>
      ) : (
        ''
      )}
      {`{`} <br />
      <ClassVariablesGenerator />
      {`       
      /**
            * default constructor --
            *                                                                                                           
      */
      `}
      {name.trim() !== '' ? (
        <>
          public <span style={textColorStyle}>{name}</span>
        </>
      ) : (
        ''
      )}
      ()
      {` {

      }`}
      <span style={commentColorStyle}>
        //END OF DEFAULT CONSTRUCTOR
        <br />
        <br />
      </span>{' '}
    </span>
  );

  return (
    <span>
      {projectJavaDoc}
      {classHeader}
    </span>
  );
}

export default HeaderCodeGenerator;
