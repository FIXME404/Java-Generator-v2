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
    <div className={styles['input-section']} id='input'>
      <Card>
        <h3>Class Header</h3>
        <HeaderInput />
        <h3>Instance Variables</h3>
        {variableFields.map((variableState, index) => (
          <VariableInput key={'v' + index} id={'v' + index} />
        ))}
        <AddInputFieldButton type={'variable'} />

        <h3>Methods</h3>
        {methodFields.map((methodState, index) => (
          <MethodInput key={'m' + index} id={'m' + index} />
        ))}
        <AddInputFieldButton type={'method'} />
      </Card>
    </div>
  );
}

export default InputSection;
