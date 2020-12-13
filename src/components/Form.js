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

          <br />
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
        <br /><br />
        <fieldset>

<fieldset>
    <Perustiedot></Perustiedot>
    </fieldset>


          {Data.map((Details, id) => {
            <li key={Details.id}></li>
            return <div>
<fieldset>

              <h2>Ensimmäisen Asunnon maalintarpeet ja kustannukset</h2>
          <br /><br />
              {Details.Asunnot.Asunto1.Tila1.tilanNimi}en maalintarpeet: {Details.Asunnot.Asunto1.Tila1.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto1.Tila1.tilanNimi} kustannukset: {Details.Asunnot.Asunto1.Tila1.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />

              <br /><br />
              {Details.Asunnot.Asunto1.Tila2.tilanNimi}en maalintarpeet: {Details.Asunnot.Asunto1.Tila2.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto1.Tila2.tilanNimi} kustannukset: {Details.Asunnot.Asunto1.Tila2.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />

              <br /><br />
              {Details.Asunnot.Asunto1.Tila3.tilanNimi}en maalintarpeet: {Details.Asunnot.Asunto1.Tila3.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto1.Tila3.tilanNimi} kustannukset: {Details.Asunnot.Asunto1.Tila3.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />

              <br /><br />
              {Details.Asunnot.Asunto1.Tila4.tilanNimi}n maalintarpeet: {Details.Asunnot.Asunto1.Tila4.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto1.Tila4.tilanNimi} kustannukset: {Details.Asunnot.Asunto1.Tila4.pintaala * Number(this.state.count) * Details.Asunnot.Asunto1.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />

          Asunnon maalintarve: {Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto1.kokonaisPintaala}
              <br />

          Asunnon kustannukset: {Number(this.state.price) * Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto1.kokonaisPintaala}
              <br /><br />
              </fieldset>

<fieldset>
              <h2>Toisen Asunnon maalintarpeet ja kustannukset</h2>

        <br /><br />
              {Details.Asunnot.Asunto2.Tila1.tilanNimi}en maalintarpeet: {Details.Asunnot.Asunto2.Tila1.pintaala * Number(this.state.count) * Details.Asunnot.Asunto2.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto2.Tila1.tilanNimi} kustannukset: {Details.Asunnot.Asunto2.Tila1.pintaala * Number(this.state.count) * Details.Asunnot.Asunto2.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />

              <br /><br />
              {Details.Asunnot.Asunto2.Tila2.tilanNimi}en maalintarpeet: {Details.Asunnot.Asunto2.Tila2.pintaala * Number(this.state.count) * Details.Asunnot.Asunto2.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto2.Tila2.tilanNimi} kustannukset: {Details.Asunnot.Asunto2.Tila2.pintaala * Number(this.state.count) * Details.Asunnot.Asunto2.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />

              <br /><br />
              {Details.Asunnot.Asunto2.Tila3.tilanNimi}en maalintarpeet: {Details.Asunnot.Asunto2.Tila3.pintaala * Number(this.state.count) * Details.Asunnot.Asunto2.tyyppikerroin * Number(this.state.maalauskerta)} litraa
        <br />
              {Details.Asunnot.Asunto2.Tila3.tilanNimi} kustannukset: {Details.Asunnot.Asunto2.Tila3.pintaala * Number(this.state.count) * Details.Asunnot.Asunto2.tyyppikerroin * Number(this.state.maalauskerta) * Number(this.state.price)}
              <br /><br />



          Asunnon maalintarve: {Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto2.kokonaisPintaala}
              <br />

          Asunnon kustannukset: {Number(this.state.price) * Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto2.kokonaisPintaala}
              <br /><br />

              </fieldset>

<fieldset>

  <h2> Koko Taloyhtiön tarpeet ja kustannukset</h2>
  
          Taloyhtiön maalintarve: {Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto2.kokonaisPintaala + Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto1.kokonaisPintaala}

              <br />
          Taloyhtiön kustannukset: {Number(this.state.price) * Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto2.kokonaisPintaala + Number(this.state.price) * Number(this.state.maalauskerta) * Number(this.state.count) * Details.Asunnot.Asunto1.kokonaisPintaala}
            
          </fieldset>
            
            </div>

          })}

         

        </fieldset>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />



      </span >
    );
  }
}

