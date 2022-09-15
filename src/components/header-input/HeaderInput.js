import styles from './HeaderInput.module.scss';
import { useDispatch } from 'react-redux';
import { headerActions } from '../../store/header';
import TextInput from '../Inputs/TextInput';

function HeaderInput() {
  const dispatch = useDispatch();

  const changeNameHandler = event => dispatch(headerActions.addName(event.target.value));

  const changeExtendsHandler = event => dispatch(headerActions.addExtends(event.target.value));

  const changeImplementsHandler = event =>
    dispatch(headerActions.addImplements(event.target.value));

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
