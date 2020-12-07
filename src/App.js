import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  return (
    <div className="wrapper">
      <h1>Nimesi</h1>
      {submitting &&
      <div>Lähetät seuraavat tiedot:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
          ))}
        </ul>
      </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nimi</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Maalit</p>
            <select name="maali" onChange={handleChange}>
              <option value="">--Valitse maali--</option>
              <option value="Tapettimaali">Tapettimaali</option>
              <option value="Kattomaali">Kattomaali</option>
              <option value="Puumaali">Puumaali</option>
              <option value="Öljymaali">Öljymaali</option>
            </select>
          </label>
          <label>
            <p>Litra</p>
            <input type="number" name="count" onChange={handleChange} step="1"/>
          </label>
        </fieldset>
        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default App;
