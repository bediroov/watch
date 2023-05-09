import React, { Component } from 'react'
import main from "../assets/img/main.jpg"
 class Main extends Component {
  render() {
    return (
      <div className="main">
       <div className="container">
        <div className="row">
           <div className="col-12 col-sm-12 col-md-6">
            <div className="leftside">
                <div className="top"><h1>APPLE WATCH HERMES</h1></div>
              <div className="important"><p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus dolorum recusandae asperiores placeat enim et nesciunt veniam voluptatibus eligendi.</p></div>
            <div className="bottom d-flex align-items-center">
          
       
        <div className="left">
            <h3>Starting from</h3>
            <h1>$7,000,000</h1>
          </div>

          <div className="right">
            <button>Product info</button>
          </div>
        
            </div>
            </div>
           </div>
      
      <div className="col-12 col-sm-12 col-md-6">
        <div className="rightside">
          <img src={main} alt="" />
        </div>
      </div>
           
        </div>
       </div>
      </div>
    )
  }
}

export default Main