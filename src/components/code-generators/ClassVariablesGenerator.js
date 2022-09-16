import { useSelector } from 'react-redux';

function ClassVariablesGenerator() {
  const { variables } = useSelector(state => state.variables);
  console.log(variables, variables[0].type);

  const generatedCode = `// Class Variables
    ${variables
      .map(
        variable =>
          `${
            variable.type.trim() !== '' || variable.name.trim() !== ''
              ? `private ${variable.type} ${variable.name};`
              : ''
          }`
      )
      .join('\n  ')}
    `;

  return (
    <div style={{ height: '10rem', textAlign: 'left', width: '42rem', color: 'white' }}>
      <span style={{ whiteSpace: 'pre-wrap' }}>{generatedCode}</span>
    </div>
  );
}

export default ClassVariablesGenerator;
