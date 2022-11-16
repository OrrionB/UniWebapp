import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/homepage';
import LoginPage from './pages/loginpage';
import GenPage from './pages/generatorpage';
import NoPage from './pages/NoPage';
// import SignUpPage from '.page/SignUpPage';
import './pages/index.css';

export default function App () {

return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Nav/>}>
        <Route index element={<Home />} />
        <Route path="Login" element={<LoginPage/>} />
        <Route path="Generator" element={<GenPage/>} />
        {/* <Route path="SignUp" element={<SignUpPage/>} /> */}
        <Route path="*" element={<NoPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();