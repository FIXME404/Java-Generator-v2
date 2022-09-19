import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';

function MethodsGenerator() {
  const methods = useSelector(state => state.methods.methods);

  console.log(methods, 'METHODS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

  const generatedCode = methods.map(method => {
    const { returns, name, params, isMethodPrivate } = method;

    console.log(returns, name, params, isMethodPrivate, 'METHOD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    if (name.trim() !== '' || returns.trim() !== '') {
      return (
        <>
          <JavaDocGenerator name={name} params={params.split(',')} returns={returns} />
          {`${isMethodPrivate ? 'private' : 'public'} ${returns === '' ? 'void' : returns} ${name}(${params}) {
        ${returns === '' || returns === 'void' ? '' : `return ${returns};`}
  }//END OF ${name.toUpperCase()}\n\n`}
        </>
      );
    }
    return '';
  });

  return <span style={{ whiteSpace: 'pre-wrap' }}>{generatedCode}</span>;
}

export default MethodsGenerator;
