import ShowcaseSection from './components/Layout/ShowcaseSection';
import InputSection from './components/Layout/InputSection';
import GeneratedCodeSection from './components/Layout/GeneratedCodeSection';

function App() {
  console.log('App Rendered');
  return (
    <div id='app'>
      <ShowcaseSection />
      <InputSection />
      <GeneratedCodeSection />
    </div>
  );
}

export default App;
