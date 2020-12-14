import React, { Component } from 'react';


class AsuntojenPerusTiedot extends Component {
  render() {
      const {Tiedot} = this.props
          return ( <div>
            <h2>Asuntojen perustiedot</h2>

            Asunto.1 <br></br>
            {Tiedot.Asunnot.Asunto1.Tila1.tilanNimi}:   Pinta-Ala:  {Tiedot.Asunnot.Asunto1.Tila1.pintaala}m2  <br></br>
            {Tiedot.Asunnot.Asunto1.Tila2.tilanNimi}:   Pinta-Ala: {Tiedot.Asunnot.Asunto1.Tila2.pintaala}m2 <br></br>
            {Tiedot.Asunnot.Asunto1.Tila3.tilanNimi}:   Pinta-Ala: {Tiedot.Asunnot.Asunto1.Tila3.pintaala}m2 <br></br>
            {Tiedot.Asunnot.Asunto1.Tila4.tilanNimi}:   Pinta-Ala: {Tiedot.Asunnot.Asunto1.Tila4.pintaala}m2 <br></br>
            Tyyppikerroin: {Tiedot.Asunnot.Asunto1.tyyppikerroin} <br></br>
            <br></br>
            Asunto.2 <br></br>
            {Tiedot.Asunnot.Asunto2.Tila1.tilanNimi}:   Pinta-Ala:  {Tiedot.Asunnot.Asunto2.Tila1.pintaala}m2   <br></br>
            {Tiedot.Asunnot.Asunto2.Tila2.tilanNimi}:   Pinta-Ala: {Tiedot.Asunnot.Asunto2.Tila2.pintaala}m2<br></br>
            {Tiedot.Asunnot.Asunto2.Tila3.tilanNimi}:   Pinta-Ala: {Tiedot.Asunnot.Asunto2.Tila3.pintaala}m2 <br></br>
            Tyyppikerroin: {Tiedot.Asunnot.Asunto2.tyyppikerroin} <br></br>

          </div>
        
          )
    
  }
}
export default AsuntojenPerusTiedot;