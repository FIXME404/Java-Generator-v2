import styles from './InputSection.module.scss';
import { useMemo, memo } from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import HeaderInput from '../header-input/HeaderInput';
import VariableInput from '../variable-input/VariableInput';
import MethodInput from '../method-input/MethodInput';
import AddInputFieldButton from '../Buttons/AddInputFieldButton';

function InputSection() {
  console.log('INPUT SECTION RENDERED');
  const variableFields = useSelector(state => state.variables.variables);
  const methodFields = useSelector(state => state.methods.methods);

  console.log(variableFields, 'VARIABLE FIELDS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

  const variableInputs = variableFields.map(variable => <VariableInput key={variable.id} id={variable.id} />);

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
