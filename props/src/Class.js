import React, { Component } from 'react'
// import React, { Component } from 'react'

 class Cl extends Component {
    
  render() {
    console.log(this.props.s)
    return (
      <div>Class
  <button onClick={()=>this.props.d("SAMUVEL")}>CLick</button>
      </div>
    )
  }
}


export default class Classs extends Component {
//    pass = (easy)=>{
//       console.log(easy);
//   }
  constructor(){
    super()
//    console.log(this);
   this.pass = this.pass.bind(this)
  }
  pass() {
    console.log(this);
}
  render() {
    // console.log(this.props.name);
    return (
      <div>
          SIMEON<br></br>{this.props.name}
          <button onClick={this.pass}>CLick</button>
          {/* <Cl s = {this.props.name} d ={this.pass}/> */}
      </div>
    )
  }
}





// import React from 'react'

// const Class = () => {
//   return (
//     <div>Class

//     </div>
//   )
// }

// export default Class