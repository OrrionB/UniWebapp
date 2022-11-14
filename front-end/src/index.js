import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/homepage';
import LoginPage from './pages/loginpage';
import GenPage from './pages/generatorpage';
import NoPage from './pages/NoPage';
import './pages/index.css';

export default function App () {
  console.log("etest")
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="Login" element={<LoginPage/>} />
        <Route path="Generator" element={<GenPage/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
