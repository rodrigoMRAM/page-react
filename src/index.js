import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Inicio from './Inicio';
import Lashes from './Lashes';
import Contenido from './Contenido';
import Preguntas from './Preguntas';
import Lifting from './Lifting';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Inicio/>}>
    <Route path='/' element={<Contenido/>}></Route>
    <Route path='lash' element={<Lashes/>}></Route>
    <Route path='/preguntas' element={<Preguntas/>}></Route>
    <Route path='/lifting' element={<Lifting/>}></Route>
  
  </Route>   
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
