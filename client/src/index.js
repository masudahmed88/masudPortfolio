import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutme from './components/AboutMe';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Aboutme/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
