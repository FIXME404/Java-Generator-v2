import { useSelector } from 'react-redux';
import ClassVariablesGenerator from './ClassVariablesGenerator';

function HeaderCodeGenerator() {
  const { name, extends: extend, implements: implement } = useSelector(state => state.headers.headers);

  const generatedCode = `/**
      * ${name} -- .
      *
      * <p> Description: </p>
      *
      * @ author
*/
 
  `;

  const spanName = <span>{name}</span>;

  const classHeader = ` 
  /**
      * default constructor --
      * 
  * /
  public class ${spanName} ${extend.trim() !== '' ? ` extend ${extend}` : ''}${implement.trim() !== '' ? ` implement ${implement}` : ''}() {

  }//END OF CONSTRUCTOR
      
      `;

  const classHeaders =
    //prettier-ignore
    <span style={{ whiteSpace: 'pre-wrap', display: 'inline-block' }}>
       /**
          * default constructor --
          *                                                                                                           
       */                                                                                  
       public class <span style={{ color: 'burlywood', whiteSpace: 'pre-wrap', whiteSpace: '-moz-pre-wrap' }}>{name}</span>
    </span>;

  return (
    <span style={{ whiteSpace: 'pre-wrap' }}>
      {generatedCode}
      <ClassVariablesGenerator /> {classHeader}
    </span>
    // classHeaders
  );
}

export default HeaderCodeGenerator;
