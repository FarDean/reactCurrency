import React from 'react';
import './App.css';
import CurrencyRow from './components/CurrencyRow';

function App() {
  return (
    <div>
        <h1>Hello world</h1>
        <CurrencyRow />
        <div>=</div>
        <CurrencyRow />
    </div>
  );
}

export default App;
