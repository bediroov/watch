import React, { Component } from 'react'
import logo from "../assets/img/logo.png"

export class Headertwo extends Component {
  render() {
    return (
      <div className="headertwo">    

         <div className="container">
          <div className="d-flex align-items-center ">
      <div className="col-12 col-sm-6 col-md-3">
      <div className="group">

<input  type="text" style={{ color: "white" }}  placeholder="Search for products"   ></input>
<i className="fa-solid fa-magnifying-glass"></i>
</div>
      </div>
         
<div className="col-12 col-sm-6 col-md-3">
<div className="logo">
<img  height={100}  src={logo} alt="" />
</div>
</div>
<div className="col-12 col-sm-6 col-md-3">
  
<div className="header-tool">
<div className="icon">
  <i style={{ color: "white" }} className="fa-regular fa-address-book"></i>
</div>

<div className="writing ">
  <span className="word">Customer Support</span>
  <span className="number">1-800-123-45-67		</span>
</div>

<div className="drop">

  <button style={{ backgroundColor: "black" }} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul class="dropdown-menu mt-3">

    <div className="box">
      <span style={{ color: "white" }} className='spanone  '>New York</span>
      <span style={{ color: "white" }} className="spantwo" >1-800-333-42-63</span>
      <span className="spanthree" >78 2ND HOUSE RD MONTAUK, NY, 11954</span>
      <span style={{ color: "yellow" }} >ny@woodstock.com</span>
    </div>

    <div className="box-bottom">
      <span style={{ color: "white" }} className='spanone  '>San Fransisko</span>
      <span style={{ color: "white" }} className="spantwo" >1-800-333-42-63</span>
      <span className="spanthree" >78 2ND HOUSE RD MONTAUK, NY, 11954</span>
      <span style={{ color: "yellow" }} >ny@woodstock.com</span>

    </div>

    <div className="icons d-flex align-items-center">
      <i style={{ color: "blue" }} className="fa-brands fa-facebook" />
      <i style={{ color: "red" }} className="fa-brands fa-twitter" />
      <i style={{ color: "orange" }} className="fa-brands fa-google" />
      <i style={{ color: "green" }} className="fa-solid fa-wifi" />
    </div>
  </ul>

</div>

</div>

</div>


<div className="col-12 col-sm-6 col-md-3">
<div className="lock ">
<i class="fa-solid fa-lock"></i>
<h5>0 ITEMS
 $0.00</h5>
</div>
</div>
          </div>
         </div>
         
      </div>

     
    )
  }
}

export default Headertwo