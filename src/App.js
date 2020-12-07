import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('Kaavake lähetetty.')
  }
  return (
    <div className="wrapper">
      <h1>Nimesi</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nimi</p>
            <input name="name"/>
          </label>
        </fieldset>
        <button type="submit">Lähetä"</button>
      </form>
    </div>
  );
}

export default App;
