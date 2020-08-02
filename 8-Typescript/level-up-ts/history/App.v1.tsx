import React from 'react';
import { Head } from './components/Head';
import { Button } from './components/Button';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Head title='Head' status='loaded' />
      <Button
        handleClick={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}

export default App;
