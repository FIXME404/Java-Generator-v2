import styles from './App.module.scss';
import ShowcaseSection from './components/Layout/ShowcaseSection';
import InputSection from './components/Layout/InputSection';
import GeneratedCodeSection from './components/Layout/GeneratedCodeSection';
import { useSelector } from 'react-redux';

function App() {
  // const state = useSelector(state => state.variables.variables);

  return (
    <div id='app'>
      <ShowcaseSection />
      <InputSection />
      <GeneratedCodeSection />
    </div>
  );
}

export default App;
