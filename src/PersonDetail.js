import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonDetail = props => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/people/${props.match.params.id}`)
      .then(response => {
        setPerson(response.data);
      });
  }, [props.match.params.id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/people/${person.id}`)
      .then(response => {
        console.log(response.data);
        props.history.push('/people');
      });
  };

  const handleUpdate = event => {
    event.preventDefault();
    axios.put(`http://localhost:3000/people/${person.id}`, person)
      .then(response => {
        console.log(response.data);
        props.history.push('/people');
      });
  };

  const handleChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{person.name} {person.surname} ({person.occupation})</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={person.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" value={person.surname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={person.age} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" value={person.occupation} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PersonDetail;
