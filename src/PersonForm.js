import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [id, setId] = useState('');


  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/people', { id, name, surname, age, occupation })
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <h2>Create Person</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="id">Id:</label>
          <input type="text" id="id" value={id} onChange={event => setId(event.target.value)} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" value={surname} onChange={event => setSurname(event.target.value)} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={event => setAge(event.target.value)} />
        </div>
        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" value={occupation} onChange={event => setOccupation(event.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PersonForm;
