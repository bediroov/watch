import React, { Component } from 'react'

export class Headerone extends Component {
  render() {
    return (
    

      <nav class="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link active" href="/">FAQS</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link active" href="/">BLOG</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link active" href="/">Contact Us</a>
              </li>
              <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link active" href="/">BUY THEME</a>
              </li>

            </ul>

        <div className="SECOND d-flex align-items-center  ">
        <ul className="list-group list-group-horizontal ">
              <li className="list-group-item d-flex align-items-center list-group-item-dark ">
                <i className="fa-solid fa-arrow-right-to-bracket mx-3"></i>
                <a style={{ color: "black" }} className="nav-link active" href="/">Login/Register</a>

              </li>
              <li className="list-group-item d-flex align-items-center list-group-item-dark">
                <i className="fa-solid fa-heart mx-3"></i>
                <a style={{ color: "black" }} className="nav-link active" href="/">WishList</a>
              </li>

            </ul>



            <ul class="list-group list-group-horizontal mx-3">
              <li className="list-group-item list-group-item-dark">
                <a style={{ color: "black" }}  href="/"><i class="fa-brands fa-facebook"></i></a>
              </li>
              <li className="list-group-item list-group-item-dark">
                <a style={{ color: "black" }}  href="/"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li class="list-group-item list-group-item-dark">
                <a style={{ color: "black" }}  href="/"><i class="fa-brands fa-twitter"></i></a>
              </li>
            </ul>
           
        </div>

          </div>
        </div>
      </nav>



    )
  }
}

export default Headerone

