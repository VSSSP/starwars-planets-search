import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Provider from './context/Provider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider>
        <HomePage />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
