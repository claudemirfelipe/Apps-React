import React from "react"
//Modelo para classes 
export default class CalcularIMC extends React.Component{
  constructor(props){
    super(props)
    this.calc=this.fcalc.bind(this)
  }

  fcalc=()=>{
    // const r=this.props.p/(this.props.a*this.props.a)
    // this.props.sr(r)
     this.props.sr(this.props.p/(this.props.a*this.props.a))

  }

  render(){
    return(
      <div>
        <button onClick={this.calc}>Calcular</button>
      </div>
    )
  }
}


  // modelo usado com Function
// export default function CalcularIMC(props){
//   const calc=()=>{
//     props.sr(props.p/(props.a*props.a));
//    }
//    return(
//      <div>
//        <button onClick={calc}>Calcular</button>
//      </div>
//    )
// }