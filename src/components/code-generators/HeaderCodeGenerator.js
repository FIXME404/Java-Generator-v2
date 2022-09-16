import { useSelector } from 'react-redux';
import ClassVariablesGenerator from './ClassVariablesGenerator';

function HeaderCodeGenerator() {
  const {
    name,
    extends: extend,
    implements: implement
  } = useSelector(state => state.headers.headers);

  const generatedCode = `/**
      * ${name} -- .
       *
       * <p> Description: </p>
       *
       * @ author
  */`;

  const classHeader = `     public class ${name}${extend.trim() !== '' ? ` extend ${extend}` : ''}${
    implement.trim() !== '' ? ` implement ${implement}` : ''
  } {\n`;

  return (
    <div style={{ height: '10rem', textAlign: 'left', width: '42rem', color: 'white' }}>
      <span style={{ whiteSpace: 'pre-wrap' }}>
        {generatedCode}
        <ClassVariablesGenerator /> {classHeader}
      </span>
    </div>
  );
}

export default HeaderCodeGenerator;
