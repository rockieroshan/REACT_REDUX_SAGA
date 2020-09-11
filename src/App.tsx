import React, { Suspense } from 'react';
import './App.scss';
import Loader from './components/Loader/Loader';

const Container = React.lazy(() => import('./components/Container/Container'));

const App: React.SFC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Container />
      </Suspense>
    </div>
  );
};

export default App;
