import React from 'react';
import styles from './InputSection.module.scss';
import { useSelector } from 'react-redux';
import Card from '../../components/UI/Card';
import HeaderInput from '../../components/header-input/HeaderInput';
import VariableInput from '../../components/variable-input/VariableInput';
import MethodInput from '../../components/method-input/MethodInput';
import AddInputFieldButton from '../../components/buttons/AddInputFieldButton';
import { ClassVariablesState } from '../../store';
import { MethodsState } from '../../store';

function InputSection() {
  console.log('InputSection');

  // Get the class variables and methods from the redux store
  const variableFields = useSelector((state: ClassVariablesState) => state);
  const methodFields = useSelector((state: MethodsState) => state.methods);

  console.log('variableFields ***********' + variableFields);

  console.log(typeof variableFields);
  console.log(typeof methodFields);

  // Map over the variables array and return an JSX element for each variable
  const variableInputs = variableFields.map(variable => <VariableInput key={variable.id} id={variable.id} />);

  // Map over the methods array and return an JSX element for each method
  const methodInputs = methodFields.map(method => <MethodInput key={method.id} id={method.id} />);

  return (
    <section className={styles['input-section']} id='input'>
      <Card>
        {/* Header Input Fields */}
        <h3>Class Header</h3>
        <HeaderInput />

        {/* Variable Input Fields */}
        <h3>Instance Variables</h3>
        {variableInputs}
        <div className={styles['input-section__add-btn']}>
          <AddInputFieldButton type={'variable'} />
        </div>

        {/* Method Input Fields */}
        <h3>Methods</h3>
        {methodInputs}
        <div className={styles['input-section__add-btn']}>
          <AddInputFieldButton type={'method'} />
        </div>

        {/* To Code Button */}
        <div className={styles['input-section__to-code-btn']}>
          <a href='#input'>GENERATE CODE</a>
        </div>
      </Card>
    </section>
  );
}

export default InputSection;
