import { useDispatch } from 'react-redux';
import { classVariablesActions } from '../../store/class-variables';
import { methodsActions } from '../../store/methods';
import styles from './AddInputFieldButton.module.scss';

function AddInputFieldButton(props) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    if (props.type === 'variable') {
      dispatch(classVariablesActions.addVariable());
    } else if (props.type === 'method') {
      dispatch(methodsActions.addMethod());
    }
  };

  return <button onClick={addItemHandler} className={styles.button} />;
}

export default AddInputFieldButton;
