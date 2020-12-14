import React from 'react';
import Data from "../data/tilat.json"
import Perustiedot from "./Perustiedot"
import '../App.css';
import AsuntojenPerusTiedot from "./AsuntojenPerusTiedot"

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', maalit: '', price: '', count: '', maalauskerta: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ [e.target.name]: value }, function () {
    });

  }

  render() {

    return (



      <span>

        <div id="maalilaskuri">

          <fieldset>
            <h2>Maalin perustiedot</h2>
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

            
            <label>
              <p>Hinta (€/l)</p>
              <input value={this.state.price} onChange={this.handleChange} name="price" placeholder="Hinta" /> 
            </label>
            <label>
              <p>Riittoisuus (m2/l)</p>
              <input value={this.state.count} onChange={this.handleChange} name="count" placeholder="Riittoisuus" />
            </label>
            <label>
              <p>Kuinka monta maalauskertaa?</p>
              <select value={this.state.maalauskerta} onChange={this.handleChange} name="maalauskerta" placeholder="Maalauskerrat" >
                <option value="">--Kuinka monta krt--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </fieldset>
        </div>

        <div id="tiedot">
          <fieldset>

   

            <fieldset>
              <Perustiedot />
            </fieldset>


            {Data.map((Details, id) =>  {
             <AsuntojenPerusTiedot Tiedot={Details} key={`post-list-key' ${id}`} />


              //Formin syötettyjen tietojen määritykset
              let Maalin_Riittoisuus = Number(this.state.count)
              let Hinta = Number(this.state.price)
              let Maalauskertojen_Määrä = Number(this.state.maalauskerta)


              //Asunto1 Laskut ja määritykset
              let Asunto1_Tila1_Ala = Details.Asunnot.Asunto1.Tila1.pintaala;
              let Asunto1_Tila2_Ala = Details.Asunnot.Asunto1.Tila2.pintaala;
              let Asunto1_Tila3_Ala = Details.Asunnot.Asunto1.Tila3.pintaala;
              let Asunto1_Tila4_Ala = Details.Asunnot.Asunto1.Tila4.pintaala;
              let Asunto1_KokonaispintaAla = Asunto1_Tila1_Ala + Asunto1_Tila2_Ala + Asunto1_Tila3_Ala + Asunto1_Tila4_Ala;
              let Asunto1_Tyyppikerroin = Details.Asunnot.Asunto1.tyyppikerroin;

              let Asunto1_Tila1_Maalintarpeet = Asunto1_Tila1_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä
              let Asunto1_Tila2_Maalintarpeet = Asunto1_Tila2_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä
              let Asunto1_Tila3_Maalintarpeet = Asunto1_Tila3_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä
              let Asunto1_Tila4_Maalintarpeet = Asunto1_Tila4_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä

              let Asunto1_Tila1_Hinta = Asunto1_Tila1_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä * Hinta
              let Asunto1_Tila2_Hinta = Asunto1_Tila2_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä * Hinta
              let Asunto1_Tila3_Hinta = Asunto1_Tila3_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä * Hinta
              let Asunto1_Tila4_Hinta = Asunto1_Tila4_Ala / Maalin_Riittoisuus * Asunto1_Tyyppikerroin * Maalauskertojen_Määrä * Hinta


              //Asunto 2 Laskut ja määritykset
              let Asunto2_Tila1_Ala = Details.Asunnot.Asunto2.Tila1.pintaala
              let Asunto2_Tila2_Ala = Details.Asunnot.Asunto2.Tila2.pintaala
              let Asunto2_Tila3_Ala = Details.Asunnot.Asunto2.Tila3.pintaala
              let Asunto2_KokonaispintaAla = Asunto2_Tila1_Ala + Asunto2_Tila2_Ala + Asunto2_Tila3_Ala
              let Asunto2_Tyyppikerroin = Details.Asunnot.Asunto2.tyyppikerroin


              let Asunto2_Tila1_Maalintarpeet = Asunto2_Tila1_Ala / Maalin_Riittoisuus * Asunto2_Tyyppikerroin * Maalauskertojen_Määrä
              let Asunto2_Tila2_Maalintarpeet = Asunto2_Tila2_Ala / Maalin_Riittoisuus * Asunto2_Tyyppikerroin * Maalauskertojen_Määrä
              let Asunto2_Tila3_Maalintarpeet = Asunto2_Tila3_Ala / Maalin_Riittoisuus * Asunto2_Tyyppikerroin * Maalauskertojen_Määrä

              let Asunto2_Tila1_Hinta = Asunto2_Tila1_Ala / Maalin_Riittoisuus * Asunto2_Tyyppikerroin * Maalauskertojen_Määrä * Hinta
              let Asunto2_Tila2_Hinta = Asunto2_Tila2_Ala / Maalin_Riittoisuus * Asunto2_Tyyppikerroin * Maalauskertojen_Määrä * Hinta
              let Asunto2_Tila3_Hinta = Asunto2_Tila3_Ala / Maalin_Riittoisuus * Asunto2_Tyyppikerroin * Maalauskertojen_Määrä * Hinta


              //Asuntojen Laskut
              let Asunto1_Maalintarpeet = Asunto1_KokonaispintaAla / Maalin_Riittoisuus * Maalauskertojen_Määrä
              let Asunto1_Kaikki_Kustannukset = Asunto1_KokonaispintaAla / Maalin_Riittoisuus * Maalauskertojen_Määrä * Hinta

              let Asunto2_Maalintarpeet = Asunto2_KokonaispintaAla / Maalin_Riittoisuus * Maalauskertojen_Määrä
              let Asunto2_Kaikki_Kustannukset = Asunto2_KokonaispintaAla / Maalin_Riittoisuus * Maalauskertojen_Määrä * Hinta


              return <div id="Laskujen tulokset">


                <fieldset id="asd">

                  <h2>Ensimmäisen Asunnon maalintarpeet ja kustannukset</h2>
                  <br /><br />
                  {Details.Asunnot.Asunto1.Tila1.tilanNimi}: maalintarpeet: {Asunto1_Tila1_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto1.Tila1.tilanNimi}: kustannukset: {Asunto1_Tila1_Hinta.toFixed(1)} euroa
                  <br /><br />

                  <br /><br />
                  {Details.Asunnot.Asunto1.Tila2.tilanNimi}: maalintarpeet: {Asunto1_Tila2_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto1.Tila2.tilanNimi}: kustannukset: {Asunto1_Tila2_Hinta.toFixed(1)} euroa
                  <br /><br />

                  <br /><br />
                  {Details.Asunnot.Asunto1.Tila3.tilanNimi}: maalintarpeet: {Asunto1_Tila3_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto1.Tila3.tilanNimi}: kustannukset: {Asunto1_Tila3_Hinta.toFixed(1)} euroa
                  <br /><br />

                  <br /><br />
                  {Details.Asunnot.Asunto1.Tila4.tilanNimi}: maalintarpeet: {Asunto1_Tila4_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto1.Tila4.tilanNimi}: kustannukset: {Asunto1_Tila4_Hinta.toFixed(1)} euroa
                  <br /><br />

          Asunnon maalintarve: {Asunto1_Maalintarpeet.toFixed(1)} litraa
                  <br />

          Asunnon kustannukset: {Asunto1_Kaikki_Kustannukset.toFixed(1)} euroa
                  <br /><br />
                </fieldset>

                <fieldset>
                  <h2>Toisen Asunnon maalintarpeet ja kustannukset</h2>

                  <br /><br />
                  {Details.Asunnot.Asunto2.Tila1.tilanNimi}: maalintarpeet: {Asunto2_Tila1_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto2.Tila1.tilanNimi}: kustannukset: {Asunto2_Tila1_Hinta.toFixed(1)} euroa
                  <br /><br />

                  <br /><br />
                  {Details.Asunnot.Asunto2.Tila2.tilanNimi}: maalintarpeet: {Asunto2_Tila2_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto2.Tila2.tilanNimi}: kustannukset: {Asunto2_Tila2_Hinta.toFixed(1)} euroa
                  <br /><br />

                  <br /><br />
                  {Details.Asunnot.Asunto2.Tila3.tilanNimi}: maalintarpeet: {Asunto2_Tila3_Maalintarpeet.toFixed(1)} litraa
        <br />
                  {Details.Asunnot.Asunto2.Tila3.tilanNimi}: kustannukset: {Asunto2_Tila3_Hinta.toFixed(1)} euroa
                  <br /><br />


                  Asunnon maalintarve: {Asunto2_Maalintarpeet.toFixed(1)} litraa
                  <br />

                  Asunnon kustannukset: {Asunto2_Kaikki_Kustannukset.toFixed(1)} euroa
                  <br /><br />

                </fieldset>

                <fieldset id="7">

                  <h2> Koko Taloyhtiön tarpeet ja kustannukset</h2>

          Taloyhtiön maalintarve: {Asunto1_Maalintarpeet + Asunto2_Maalintarpeet} litraa

                  <br />
          Taloyhtiön kustannukset: {Asunto1_Kaikki_Kustannukset + Asunto2_Kaikki_Kustannukset} euroa
                </fieldset>

              </div>

            })}



          </fieldset>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </span >
    );
  }
}

