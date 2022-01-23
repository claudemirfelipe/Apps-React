import * as React from "react"; 
import {Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="App-header">
        <main>
        <h2>Apps Basicos</h2>
        <p>Selecione uma das opções abaixo</p>
      </main>
      <Link to='/CalculadoraIMC'><button>Calculadora IMC</button></Link><br/>
      <Link to='/CalculadoraMatematica'><button>Calculadora Matematica</button></Link><br/>
      <Link to='/ConversorMoeda'><button>Conversor de Moeda</button></Link><br/>
      <Link to='/JogodaVelha'><button>Jogo da Velha</button></Link><br/>
      </div>
    )
}