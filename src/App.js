import { useState, useEffect } from 'react';

function App() {
  const [person, setPerson] = useState(null);
  console.log(person)

  useEffect(() => {
    fetch('http://localhost:3000/person')
      .then(response => response.json())
      .then(person => setPerson(person))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      {person ? (
        <div>
      <h1>{person.name}</h1>
      <p>Surname: {person.surname}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
