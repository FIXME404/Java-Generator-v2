import HeaderCodeGenerator from '../code-generators/HeaderCodeGenerator';
import GettersSettersGenerator from '../code-generators/GettersSettersGenerator';
import MethodsGenerator from '../code-generators/MethodsGenerator';

function GeneratedCode() {
  return (
    <>
      <HeaderCodeGenerator />
      <GettersSettersGenerator />
      <MethodsGenerator />
    </>
  );
}

export default GeneratedCode;
