import React, { Component } from 'react'

export class Headerthree extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-space-evenly">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a style={{ color: "white" }} className="nav-link" href="#">Theme Features</a>
              </li>
              <li className="nav-item dropdown">
                <a style={{ color: "white" }} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li  className="nav-item">
                <a style={{ color: "white" }} className="nav-link" href="#">Blog</a>
              </li>
              <li  className="nav-item">
                <a style={{ color: "white" }} className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    )
  }
}

export default Headerthree