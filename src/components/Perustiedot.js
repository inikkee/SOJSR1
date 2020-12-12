import React, { Component } from 'react';
import Data from "../data/tilat.json"
import Form from "./Form"


class Perustiedot extends Component {
  render() {
      return (
      <div>
        {Data.map((Details, index)=> {
            return <div>{Details.nimi}
            </div>
        })}
      </div>
    )
  }
}
export default Perustiedot;