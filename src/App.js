import styles from './App.module.scss';
import ShowcaseSection from './components/Layout/ShowcaseSection';
import InputSection from './components/Layout/InputSection';
import { useSelector } from 'react-redux';

function App() {
  // const state = useSelector(state => state.variables.variables);

  return (
    <div className={`light-theme ${styles.app}`} id='app'>
      <ShowcaseSection className={styles['App__showcase-section']} />
      <InputSection className={styles['App__input-section']} />
    </div>
  );
}

export default App;
