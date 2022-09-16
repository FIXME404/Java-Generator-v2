import { useSelector } from 'react-redux';
import styles from './InputSection.module.scss';
import Card from '../UI/Card';
import HeaderInput from '../header-input/HeaderInput';
import VariableInput from '../variable-input/VariableInput';
import MethodInput from '../method-input/MethodInput';
import AddInputFieldButton from '../Buttons/AddInputFieldButton';

function InputSection() {
  const variableFields = useSelector(state => state.variables.variables);
  const methodFields = useSelector(state => state.methods.methods);

  return (
    <section className={styles['input-section']} id='input'>
      <Card>
        {/* Header Input Fields */}
        <h3>Class Header</h3>
        <HeaderInput />

        {/* Variable Input Fields */}
        <h3>Instance Variables</h3>
        {variableFields.map((variableState, index) => (
          <VariableInput key={'v' + index} id={'v' + index} />
        ))}

        <div className={styles['input-section__add-btn']}>
          <AddInputFieldButton type={'variable'} />
        </div>

        {/* Method Input Fields */}
        <h3>Methods</h3>
        {methodFields.map((methodState, index) => (
          <MethodInput key={'m' + index} id={'m' + index} />
        ))}

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
