import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import ColoredNavbar from './components/ColoredNavbar';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ColoredNavbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);


