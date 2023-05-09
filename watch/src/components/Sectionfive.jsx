import React, { Component } from 'react'

 class Sectionfive extends Component {
  render() {
   
    return (

<div className="col-12 col-sm-6 col-md-3 g-5">
         <div style={{backgroundColor:"black"}} className="card " >
        <img src={this.props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{color:"white"}} className="card-title">{this.props.title}</h5>        
          <p style={{color:"white"}} className="card-text">{this.props.number}</p>
       



        </div>
      </div>
     </div>

    )
  }
}

export default Sectionfive;