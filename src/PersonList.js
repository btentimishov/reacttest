import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import PersonDetail from './PersonDetail';

const PersonList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/people')
      .then(response => {
        setPeople(response.data);
      });
  }, []);

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <Link to={`/people/${person.id}`}>
              {person.name} {person.surname}
            </Link>
          </li>
        ))}
        <Routes>
          <Route path="/people/:id" element={<PersonDetail/>} />
        </Routes>
      </ul>

        
    </div>
  );
};

export default PersonList;
