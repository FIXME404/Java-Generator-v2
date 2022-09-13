import { useDispatch } from 'react-redux';
import { classVariablesActions } from '../../store/class-variables';
import { methodsActions } from '../../store/methods';

function AddInputFieldButton(props) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    if (props.type === 'variable') {
      console.log('ADDITEMHANDLER');
      dispatch(classVariablesActions.addVariable());
    } else if (props.type === 'method') {
      dispatch(methodsActions.addMethod());
    }
  };

  return <button onClick={addItemHandler} />;
}

export default AddInputFieldButton;
