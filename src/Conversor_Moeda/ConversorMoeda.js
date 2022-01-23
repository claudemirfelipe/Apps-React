import { Component } from 'react';
import Conversor from "./components/Conversor";
import {Link } from "react-router-dom";
import './ConversorMoeda.css';


export default class ConversorMoeda extends Component {
  render() {
  return (
    <div className="App">
      <Link to='/'><button>Voltar</button></Link><br/>
      <h1>Conversores de Moeda</h1>
      <div className='linha'>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className='linha'>
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className='linha'>
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}
}
