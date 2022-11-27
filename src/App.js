import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ErrorBoundary from './Pages/error-pages/ErrorBoundary';

function App() {
  const MainPage = lazy(() => import('./Pages/main-page/MainPage'));

  const SuccessScreen = lazy(() => import('./Pages/success-page/SuccessScreen'));

  const PageNotFound = lazy(() => import('./Pages/error-pages/PageNotFound'));

  return (
    <div id='app'>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/java-code-generator' element={<Navigate to='/' />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/success' element={<SuccessScreen />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
