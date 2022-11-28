import { useSelector } from 'react-redux';
import nextId from 'react-id-generator';

function ClassVariablesGenerator() {
  const variables = useSelector(state => state.variables.variables);

  const textColorStyle = {
    color: 'DodgerBlue'
  };

  const instanceVariables = variables.map(variable => {
    const displayVariable = variable.type.trim() !== '' || variable.name.trim() !== '';

    if (displayVariable)
      return (
        <>
          {`      private ${variable.type}`}{' '}
          <span style={textColorStyle} key={nextId()}>
            {variable.name}
          </span>
          ;
          <br />
        </>
      );
    return '';
  });

  return <>{instanceVariables}</>;
}

export default ClassVariablesGenerator;
