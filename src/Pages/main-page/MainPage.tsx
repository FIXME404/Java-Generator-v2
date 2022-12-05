import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import ErrorBoundary from '../error-pages/ErrorBoundary';
const ShowcaseSection = lazy(() => import('./ShowcaseSection'));
const InstructionsSection = lazy(() => import('./InstructionsSection'));
const InputSection = lazy(() => import('./InputSection'));
const GeneratedCodeSection = lazy(() => import('./GeneratedCodeSection'));
const Footer = lazy(() => import('./Footer'));

function MainPage() {
  console.log('MainPage');

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <ShowcaseSection />
        <InstructionsSection />
        <InputSection />
        <GeneratedCodeSection />
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default MainPage;
