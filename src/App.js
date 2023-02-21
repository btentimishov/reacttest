import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PersonList from './PersonList';
import PersonDetail from './PersonDetail';
import PersonForm from './PersonForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/people/new">Add Person</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/people/new" element={<PersonForm/>} />
          <Route path="/people/:id" element={<PersonDetail/>} />
          <Route path="/people" element={<PersonList/>} />
          <Route path="/" render={<h1>Welcome to the Home Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
