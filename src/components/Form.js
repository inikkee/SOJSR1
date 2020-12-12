
import React, { Component } from 'react';
import Data from "../data/tilat.json"
import Perustiedot from "./Perustiedot"
import '../App.css';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', maalit: '', price: '', count: '', maalauskerta: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ [e.target.name]: value }, function () {
      var maalit = Number(this.state.maalit);
      var price = Number(this.state.price);
      var count = Number(this.state.count);
      var maalauskerta = Number(this.state.maalauskerta);
    });

  }

  render() {
    return (

      
      <span>
        <h1>Maalin perustiedot</h1>
        <fieldset>
          <label>
            <p>Maalit</p>
            <select name="maalit" value={this.state.maalit} onChange={this.handleChange} placeholder="Maali" >
              <option value="">--Valitse maali--</option>
              <option value="Tapettimaali">Tapettimaali</option>
              <option value="Kattomaali">Kattomaali</option>
              <option value="Puumaali">Puumaali</option>
              <option value="Öljymaali">Öljymaali</option>
            </select>
          </label>

          <br/>
          <label>
            <p>Hinta (€/l)</p>
            <input value={this.state.price} onChange={this.handleChange} name="price" placeholder="Hinta" /> <br />
          </label>
          <label>
            <p>Riittoisuus (m2/l)</p>
            <input value={this.state.count} onChange={this.handleChange} name="count" placeholder="Riittoisuus" /><br />
          </label>
          <label>
            <p>Kuinka monta maalauskertaa?</p>
            <select value={this.state.maalauskerta} onChange={this.handleChange} name="maalauskerta" placeholder="Maalauskerrat" ><br />
              <option value="">--Kuinka monta krt--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
        </fieldset>
        <br/><br/>
        <fieldset>
          <br/><br/>
          Tilan maalintarpeet:(TilanPintaala * {this.state.count} * maalintyyppikerroin * {this.state.maalauskerta} )
        <br/>
          Tilan kustannukset: (Tilan maalintarpeet * {this.state.price})
        <br/><br/>
          Asunnon maalintarve: {this.state.maalauskerta * this.state.count} * AsunnonPintaala
          <br/>

          Asunnon kustannukset: {this.state.price} * Asunnon maalintarpeet
        <br/><br/>
          Taloyhtiön maalintarve: (asuntojen maalintarpeet summataan keskenään)

        <br/>
          Taloyhtiön kustannukset: (asuntojen kustannukset summataan keskenään)
          </fieldset>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>



      </span >
    );
  }
}

