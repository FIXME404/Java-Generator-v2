import { useSelector } from 'react-redux';
import JavaDocGenerator from './JavaDocGenerator';
import nextId from 'react-id-generator';

function GettersSettersGenerator() {
  console.log('GETTERS SETTERS RENDERED');
  const variables = useSelector(state => state.variables.variables);

  const mappedVariables = variables.map((variable, index) => {
    const { type, name, includesGetter, includesSetter } = variable;

    if (includesGetter && includesSetter) {
      return (
        <>
          <JavaDocGenerator name={'get' + name.charAt(0).toUpperCase() + name.slice(1)} returns={['']} key={nextId()} />
          <span key={nextId()}>
            {`public ${type} get${name.charAt(0).toUpperCase() + name.slice(1)}() {
                return ${name};
            }//END OF GET${name.toUpperCase()}\n\n`}
          </span>
          <JavaDocGenerator name={'set' + name.charAt(0).toUpperCase() + name.slice(1)} params={['']} key={nextId()} />
          <span key={nextId()}>
            {`public void set${name.charAt(0).toUpperCase() + name.slice(1)}(${type} ${name}) {
                this.${name} = ${name};
            }//END OF SET${name.toUpperCase()}\n\n`}
          </span>
        </>
      );
    } else if (includesGetter) {
      return (
        <>
          <JavaDocGenerator name={name} returns={['']} key={nextId()} />
          <span key={nextId()}>
            {`public ${type} get${name.charAt(0).toUpperCase() + name.slice(1)}() {
            return ${name};
            }//END OF GET${name.toUpperCase()}\n\n`}
          </span>
        </>
      );
    } else if (includesSetter) {
      return (
        <>
          <JavaDocGenerator name={name} params={['']} key={nextId()} />
          <span key={nextId()}>
            {`public void set${name.charAt(0).toUpperCase() + name.slice(1)}(${type} ${name}) {
            this.${name} = ${name};
            }//END OF SET${name.toUpperCase()}\n\n`}
          </span>
        </>
      );
    } else return '';
  });

  return <>{mappedVariables}</>;
}

export default GettersSettersGenerator;
