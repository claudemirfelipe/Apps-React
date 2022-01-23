import React, {useState} from 'react';
import TabelaIMC from './Componentes/TabelaIMC';
import Peso from './Componentes/Peso';
import Altura from './Componentes/Altura';
import CalcularIMC from './Componentes/CalcularIMC';
import ResultadoIMC from './Componentes/ResultadoIMC';
import {Link } from "react-router-dom";


export default function CalculadoraIMC() {

  const [peso,setPeso]=useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado,setResultado]=useState(0);
  return (
    <>
      <Peso p={peso} sp={setPeso}/>
      <Altura a={altura} sa={setAltura}/>
      <CalcularIMC p={peso} a={altura} sr={setResultado}/>
      <ResultadoIMC r={resultado}/>
      <TabelaIMC/>
      <Link to='/'><button>Voltar</button></Link><br/>
    </>
  );
}
