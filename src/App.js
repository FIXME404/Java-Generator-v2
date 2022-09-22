import { Route, Routes } from 'react-router-dom';
import ShowcaseSection from './Pages/main-page/ShowcaseSection';
import InstructionsSection from './Pages/main-page/InstructionsSection';
import InputSection from './Pages/main-page/InputSection';
import GeneratedCodeSection from './Pages/main-page/GeneratedCodeSection';
import Footer from './Pages/main-page/Footer';
import ContactMeForm from './Pages/contact-page/ContactMeForm';
import SuccessScreen from './Pages/success-page/SuccessScreen';
import ReportBugPage from './Pages/contact-page/ReportBugPage';
import PageNotFound from './Pages/404-page/PageNotFound';

function App() {
  const mainPage = (
    <>
      <ShowcaseSection />
      <InstructionsSection />
      <InputSection />
      <GeneratedCodeSection />
      <Footer />
    </>
  );

  const contactPage = <ContactMeForm />;

  const successPage = <SuccessScreen />;

  const pageNotFound = <PageNotFound />;

  const reporBugPage = <ReportBugPage />;

  return (
    <div id='app'>
      <Routes>
        <Route path='/' element={mainPage} />
        <Route path='/contact' element={contactPage} />
        <Route path='/success' element={successPage} />
        <Route path='/report-bug' element={reporBugPage} />
        <Route path='*' element={pageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
