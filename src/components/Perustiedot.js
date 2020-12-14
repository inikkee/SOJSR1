import React, { Component } from 'react';
import Data from "../data/tilat.json"
import AsuntojenPerusTiedot from "./AsuntojenPerusTiedot"

class Perustiedot extends Component {
  render() {
    //Haetaan ja tulostetaan Asuntojen perustiedot.
    return (
      <div>
        {Data.map((Details, id) => {
          return <AsuntojenPerusTiedot Tiedot={Details} key={`avain' ${id}`} />

    
        })}
      </div>
    )
  }
}
export default Perustiedot;