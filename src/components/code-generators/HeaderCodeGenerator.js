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

  const classHeader = ` 
  /**
      * default constructor --
      * 
  * /
  public class ${name}${extend.trim() !== '' ? ` extend ${extend}` : ''}${implement.trim() !== '' ? ` implement ${implement}` : ''}() {

  }//END OF CONSTRUCTOR
      
      `;

  return (
    <span style={{ whiteSpace: 'pre-wrap' }}>
      {generatedCode}
      <ClassVariablesGenerator /> {classHeader}
    </span>
  );
}

export default HeaderCodeGenerator;
