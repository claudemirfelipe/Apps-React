import React from "react";
//Modelo para classes 
export default class TabelaIMC extends React.Component{
  render(){
    return(
      <table border='1' style={{borderCollapse:'collapse'}}>
    <thead>
      <tr>
        <th>
          Classificação
        </th>
        <th>
          IMC
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Abaixo do Peso</td>
        <td>Abaixo de 18,5</td>
      </tr>
      <tr>
        <td>Peso Normal</td>
        <td>Entre 18,5 e 24,9</td>
      </tr>
      <tr>
        <td>Sobrepeso</td>
        <td>Entre 25 e 29,9</td>
      </tr>
      <tr>
        <td>Obesidade Grau I</td>
        <td>Entre 30 e 34,9</td>
      </tr>
      <tr>
        <td>Obesidade Grau II</td>
        <td>Entre 35 e 39,9</td>
      </tr>
      <tr>
        <td>Obesidade Grau III ou Mórbita</td>
        <td>Maior que 40</td>
      </tr>
    </tbody>
  </table>
  )
  }
}

// modelo usado com Function
// export default function TabelaIMC(){
//     return(
//         <table border='1' style={{borderCollapse:'collapse'}}>
//       <thead>
//         <tr>
//           <th>
//             Classificação
//           </th>
//           <th>
//             IMC
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Abaixo do Peso</td>
//           <td>Abaixo de 18,5</td>
//         </tr>
//         <tr>
//           <td>Peso Normal</td>
//           <td>Entre 18,5 e 24,9</td>
//         </tr>
//         <tr>
//           <td>Sobrepeso</td>
//           <td>Entre 25 e 29,9</td>
//         </tr>
//         <tr>
//           <td>Obesidade Grau I</td>
//           <td>Entre 30 e 34,9</td>
//         </tr>
//         <tr>
//           <td>Obesidade Grau II</td>
//           <td>Entre 35 e 39,9</td>
//         </tr>
//         <tr>
//           <td>Obesidade Grau III ou Mórbita</td>
//           <td>Maior que 40</td>
//         </tr>
//       </tbody>
//     </table>
//     )
// }