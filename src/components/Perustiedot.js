import React, { Component } from 'react';
import Data from "../data/tilat.json"
import Form from "./Form"


class Perustiedot extends Component {
  render() {
    return (
      <div>
        {Data.map((Details, id) => {
          <li key={Details.id}></li>
          return <div> 
            <h2>Asuntojen perustiedot</h2>
            
            Asunto.1 <br></br>
            {Details.Asunnot.Asunto1.Tila1.tilanNimi}:   Pinta-Ala:  {Details.Asunnot.Asunto1.Tila1.pintaala}   <br></br>
            {Details.Asunnot.Asunto1.Tila2.tilanNimi}:   Pinta-Ala: {Details.Asunnot.Asunto1.Tila2.pintaala}<br></br>
            {Details.Asunnot.Asunto1.Tila3.tilanNimi}:   Pinta-Ala: {Details.Asunnot.Asunto1.Tila3.pintaala} <br></br>
            {Details.Asunnot.Asunto1.Tila4.tilanNimi}:   Pinta-Ala: {Details.Asunnot.Asunto1.Tila4.pintaala} <br></br>
            <br></br>
            Asunto2 <br></br>
            {Details.Asunnot.Asunto2.Tila1.tilanNimi}:   Pinta-Ala:  {Details.Asunnot.Asunto2.Tila1.pintaala}   <br></br>
            {Details.Asunnot.Asunto2.Tila2.tilanNimi}:   Pinta-Ala: {Details.Asunnot.Asunto2.Tila2.pintaala}<br></br>
            {Details.Asunnot.Asunto2.Tila3.tilanNimi}:   Pinta-Ala: {Details.Asunnot.Asunto2.Tila3.pintaala} <br></br>

          </div>
        })}
      </div>
    )
  }
}
export default Perustiedot;