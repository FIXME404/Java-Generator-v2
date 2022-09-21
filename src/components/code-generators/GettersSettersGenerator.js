import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';
import nextId from 'react-id-generator';

function GettersSettersGenerator() {
  // console.log('GETTERS SETTERS RENDERED');
  const variables = useSelector(state => state.variables.variables);

  const mappedVariables = variables.map(variable => {
    const { type, name, includesGetter, includesSetter } = variable;

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
        <span style={commentTextColor}>//END OF GET{name.toUpperCase()}</span>
        <br />
        <br />
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
        <span style={commentTextColor}>//END OF SET{name.toUpperCase()}</span>
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
        <span style={commentTextColor}>//END OF SET{name.toUpperCase()}</span>
        <br />
        <br />
      </>
    );

    if (includesGetter && includesSetter) {
      return (
        <span>
          {getMethod}
          {setMethod}
        </span>
      );
    } else if (includesGetter) {
      return <span>{getMethod}</span>;
    } else if (includesSetter) {
      return <span>{setMethod}</span>;
    } else return '';
  });

  return <>{mappedVariables}</>;
}

export default GettersSettersGenerator;
