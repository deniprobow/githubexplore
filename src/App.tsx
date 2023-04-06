import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from './components/FormGroup';
import dotenv from  'dotenv'
import { Suspense, lazy } from 'react';
const Result = React.lazy(() => import('./components/Result'));


function App() {
  return (
    <div className="App p-5">
      <div className='container bg-white mx-auto min-h-screen p-4'>
        <FormGroup />
        <Suspense fallback={<h1 className='text-black-500 z-10'>Loading...</h1>}>
          <Result />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
