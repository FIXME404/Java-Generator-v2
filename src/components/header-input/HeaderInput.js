import styles from './HeaderInput.module.scss';
import { useDispatch } from 'react-redux';
import { headerActions } from '../../store/header';
import TextInput from '../Inputs/TextInput';

function HeaderInput() {
  const dispatch = useDispatch();

  const changeNameHandler = inputText => dispatch(headerActions.addName(inputText));

  const changeExtendsHandler = inputText => dispatch(headerActions.addExtends(inputText));

  const changeImplementsHandler = inputText => dispatch(headerActions.addImplements(inputText));

  return (
    <div className={styles['header-sector']}>
      <div className={styles['header-sector__content']}>
        <TextInput
          name='NAME'
          label='Class Name'
          placeholder='Class Name'
          updateMethod={changeNameHandler}
        />
      </div>

      <div className={styles['header-sector__content']}>
        <TextInput
          name='EXTENDS'
          label='extend'
          placeholder='extend'
          updateMethod={changeExtendsHandler}
        />
      </div>

      <div className={styles['header-sector__content']}>
        <TextInput
          name='IMPLEMENTS'
          label='implements'
          placeholder='implements'
          updateMethod={changeImplementsHandler}
        />
      </div>
    </div>
  );
}

export default HeaderInput;
