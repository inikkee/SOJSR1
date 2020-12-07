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
      price: event.target.price,
    })
  }

  return (
    <div className="wrapper">
      <h1>Maalin perustiedot</h1>
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
            <p>Hinta (€/l)</p>
            <input type="number" name="price" onChange={handleChange} step="1"/>
            <p>Riittoisuus (m2/l)</p>
            <input type="number" name="count" onChange={handleChange} step="1"/>
          </label>
          <label>
            <p>Kuinka monta maalauskertaa?</p>
            <select name="maalauskerta" onChange={handleChange}>
              <option value="">--Kuinka monta krt--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default App;
