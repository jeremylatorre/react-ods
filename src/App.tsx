import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@ovhcloud/ods-theme-blue-jeans';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


//Component pages

import HomePage from './pages/homepage';
import AtomPage from './pages/atompage';




function App() {

   return (
      <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/atom">Atom components</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/atom" element={<AtomPage />}>
          </Route>
          <Route path="/">
          </Route>
        </Routes>
      </div>
    </Router>
   )
}



export default App;
