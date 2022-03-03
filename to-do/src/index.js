import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';
import DetalhesTarefa from './Components/DetalhesTarefa';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/:tarefaTitle" element={<DetalhesTarefa />} />
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);