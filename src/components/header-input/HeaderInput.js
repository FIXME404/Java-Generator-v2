import styles from './HeaderInput.module.scss';
import { useDispatch } from 'react-redux';
import { headerActions } from '../../store/header';

function HeaderInput() {
  const dispatch = useDispatch();

  const changeNameHandler = event => dispatch(headerActions.addName(event.target.value));

  const changeExtendsHandler = event => dispatch(headerActions.addExtends(event.target.value));

  const changeImplementsHandler = event =>
    dispatch(headerActions.addImplements(event.target.value));

  return (
    <div className={styles['header-sector']}>
      <div className={styles['header-sector__content']}>
        <input id='name' onChange={changeNameHandler} placeholder='Class Name' required />
        <label htmlFor='name'>Class name</label>
      </div>

      <div className={styles['header-sector__content']}>
        <input id='extends' onChange={changeExtendsHandler} placeholder='extend' required />
        <label htmlFor='extends'>extend</label>
      </div>

      <div className={styles['header-sector__content']}>
        <input
          id='implements'
          onChange={changeImplementsHandler}
          placeholder='implements'
          required
        />
        <label htmlFor='implements'>implement</label>
      </div>
    </div>
  );
}

export default HeaderInput;
