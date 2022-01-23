import React from "react"
//Modelo para classes 
export default class Peso extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div>
          <label>
          Peso
          <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
          </label>
        </div>
          )
  }
}


// modelo usado com Function mais utilizado
// export default function Peso(props){
//     return(
//         <div>
//       <label>
//         Peso
//         <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
//         </label>
//     </div>
//     )
// }