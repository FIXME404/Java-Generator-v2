import { Route, Routes } from 'react-router-dom';
import ShowcaseSection from './Pages/main-page/ShowcaseSection';
import InputSection from './Pages/main-page/InputSection';
import GeneratedCodeSection from './Pages/main-page/GeneratedCodeSection';
import Footer from './Pages/main-page/Footer';
import ContactMeForm from './Pages/contact-page/ContactMeForm';

function App() {
  const mainPage = (
    <>
      <ShowcaseSection />
      <InputSection />
      <GeneratedCodeSection />
      <Footer />
    </>
  );

  const contactPage = (
    <>
      <ContactMeForm />
    </>
  );

  return (
    <div id='app'>
      <Routes>
        <Route path='/' element={mainPage} />
        <Route path='/contact' element={contactPage} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
