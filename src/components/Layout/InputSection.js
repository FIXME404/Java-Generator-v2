import { useSelector } from 'react-redux';
import styles from './InputSection.module.scss';
import Card from '../UI/Card';
import HeaderInput from '../header-input/HeaderInput';
import VariableInput from '../variable-input/VariableInput';
import MethodInput from '../method-input/MethodInput';
import AddInputFieldButton from '../Buttons/AddInputFieldButton';

function InputSection() {
  const variableFields = useSelector(state => state.variables.variables);
  console.log(variableFields);

  return (
    <div className={styles['input-section']} id='input'>
      <Card>
        <h3>Class Header</h3>
        <HeaderInput />
        <h3>Instance Variables</h3>
        {variableFields.map((variableState, index) => (
          <VariableInput key={'v' + index} id={'v' + index} />
        ))}
        {/* <VariableInput id={'v1'} /> */}
        <div className={styles['input-section__add-btn']}>
          <AddInputFieldButton type={'variable'} />
        </div>
        <h3>Methods</h3>
        <MethodInput id={'m1'} />
      </Card>
    </div>
  );
}

export default InputSection;
