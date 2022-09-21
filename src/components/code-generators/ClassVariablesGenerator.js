import { useSelector } from 'react-redux';

function ClassVariablesGenerator() {
  const variables = useSelector(state => state.variables.variables);

  const textColorStyle = {
    color: 'DodgerBlue'
  };

  const instanceVariables = variables.map(variable =>
    variable.type.trim() !== '' || variable.name.trim() !== '' ? (
      <>
        {`      private ${variable.type}`} <span style={textColorStyle}>{variable.name}</span>;
        <br />
      </>
    ) : (
      ''
    )
  );
  return <>{instanceVariables}</>;
}

export default ClassVariablesGenerator;
