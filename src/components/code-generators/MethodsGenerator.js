import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';

function MethodsGenerator() {
  const methods = useSelector(state => state.methods.methods);

  const methodNameColor = {
    color: 'DarkCyan'
  };

  const parameterTextColor = {
    color: 'lightsalmon'
  };

  const commentTextColor = {
    color: 'DarkSlateGray'
  };

  const returnTextColor = {
    color: 'Hotpink'
  };

  const generatedCode = methods.map(method => {
    const { returns, name, params, isMethodPrivate } = method;
    console.log(returns, 'returns');

    if (name.trim() !== '' || returns.trim() !== '') {
      return (
        <>
          <JavaDocGenerator name={name} params={params.split(',')} returns={returns} />
          {isMethodPrivate ? 'private' : 'public'} {returns === '' ? 'void' : returns} <span style={methodNameColor}>{name}</span>(<span style={parameterTextColor}>{params}</span>)
          {` {
            return `}
          <span style={returnTextColor}>{returns.trim() !== '' && returns !== 'void' ? 'new' + returns.charAt(0).toUpperCase() + returns.slice(1) + '()' : ''}</span>
          {`;
            }`}
          <span style={commentTextColor}>{`//END OF ${name.toUpperCase()}`}</span>
          <br />
          <br />
        </>
      );
    }
    return '';
  });

  return (
    <span>
      {generatedCode}
      <br />
      {`}`}
    </span>
  );
}

export default MethodsGenerator;
