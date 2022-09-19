import { useSelector } from 'react-redux';

function ClassVariablesGenerator() {
  const variables = useSelector(state => state.variables.variables);

  const generatedCode = `${variables.map(variable => `${variable.type.trim() !== '' || variable.name.trim() !== '' ? `    private ${variable.type} ${variable.name};\n` : ''}`).join(' ')}
    `;

  return <span style={{ whiteSpace: 'pre-wrap' }}>{generatedCode}</span>;
}

export default ClassVariablesGenerator;
