import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './pages/login';
import Homepage from './pages/homepage'
import SignupForm from './pages/SignupForm'
import FormSuccess from './pages/FormSuccess'
import Add from './pages/add'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<Add />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/formSuccess" element={<FormSuccess />} />
    </Routes>
  </BrowserRouter>
);
