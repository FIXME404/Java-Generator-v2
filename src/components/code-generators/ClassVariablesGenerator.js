import { useSelector } from 'react-redux';

function ClassVariablesGenerator() {
  const variables = useSelector(state => {
    console.log(state, 'STATE IN CLASS VARIABLES GENERATOR');
    return state.variables.variables;
  });

  console.log('@@@@@@@@@   file: ClassVariablesGenerator.js   line 8   ClassVariablesGenerator   variables', variables);

  const generatedCode = `${variables.map(variable => `${variable.type.trim() !== '' || variable.name.trim() !== '' ? `    private ${variable.type} ${variable.name};\n` : ''}`).join(' ')}
    `;

  return <span style={{ whiteSpace: 'pre-wrap' }}>{generatedCode}</span>;
}

export default ClassVariablesGenerator;
