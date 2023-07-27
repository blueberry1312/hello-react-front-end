import React from 'react';
import {
  Link, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Greeting from './Pages/Greeting';

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/greeting">Navigate to Greeting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
