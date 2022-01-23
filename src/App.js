import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Navegacao/Home';
import CalculadoraIMC from './CalculadoraIMC/CalculadoraIMC';
import CalculadoraMatematica from './CalculadoraMatematica/CalculadoraMatematica';
import ConversorMoeda from './Conversor_Moeda/ConversorMoeda';
import JogodaVelha from './JogodaVelha/JogodaVelha';

export default function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CalculadoraIMC" element={<CalculadoraIMC/>} />
        <Route path="/CalculadoraMatematica" element={<CalculadoraMatematica/>} />
        <Route path="/ConversorMoeda" element={<ConversorMoeda/>} />
        <Route path="/JogodaVelha" element={<JogodaVelha/>} />
      </Routes>
    </div>
  );
}

