import React, { Component } from 'react'

 class Sectionsix extends Component {
  render() {
    return (
  <>


{/* <div className="writing d-flex">
    <h3>Woodstock News</h3>
</div> */}

<div className="col-12 col-sm-6 col-md-4 g-5">


<div className="card" >
        <img height={300} src={this.props.photo}  className="card-img-top" alt="..." />
           
         <div style={{backgroundColor:"black"}} className="card-body">
          <h5 style={{color:"white"}} className="card-title">{this.props.about}</h5>
          <p style={{color:"white"}} className="card-text">{this.props.bottom}</p>
        
        </div>
      </div>
     </div>



  </>
    )
  }
}

export default Sectionsix;