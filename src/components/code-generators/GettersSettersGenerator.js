import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';
import nextId from 'react-id-generator';

function GettersSettersGenerator() {
  // console.log('GETTERS SETTERS RENDERED');
  const variables = useSelector(state => state.variables.variables);

  const methodNameColor = {
    color: 'DarkCyan'
  };

  const returnTextColor = {
    color: 'Hotpink'
  };

  const commentTextColor = {
    color: 'DarkSlateGray'
  };

  const parameterTextColor = {
    color: 'lightsalmon'
  };

  const keyWordThisColor = {
    color: 'Orange'
  };

  const mappedVariables = variables.map(variable => {
    console.log(variable, 'variable');
    const { type, name, includesGetter, includesSetter } = variable;

    const getMethod = (
      <>
        <JavaDocGenerator name={'get' + name.charAt(0).toUpperCase() + name.slice(1)} returns={['']} key={nextId()} />
        public {type}
        <span style={methodNameColor}> get{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        {`() {
              return `}
        <span style={returnTextColor}>{name}</span>;
        {`
            }`}
        <span style={commentTextColor}>{`//END OF GET ${name.toUpperCase()}`}</span>
        <br />
        <br />
      </>
    );

    const setMethod = (
      <>
        <JavaDocGenerator name={'set' + name.charAt(0).toUpperCase() + name.slice(1)} params={['']} key={nextId()} />
        public void
        <span style={methodNameColor}> set{name.charAt(0).toUpperCase() + name.slice(1)}</span>(
        <span style={parameterTextColor}>
          {type} {name}
        </span>
        )
        {` {
              `}
        <span style={keyWordThisColor}>this.</span>
        <span style={returnTextColor}>{name}</span> = <span style={returnTextColor}>{name}</span>;
        {`
            }`}{' '}
        <span style={commentTextColor}>{`//END OF SET${name.toUpperCase()}`}</span>
        <br />
        <br />
      </>
    );

    return (
      <span key={nextId()}>
        {includesGetter && getMethod}
        {includesSetter && setMethod}
      </span>
    );
  });

  return <>{mappedVariables}</>;
}

export default GettersSettersGenerator;
