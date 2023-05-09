import React, { Component } from 'react'
import photo from "../assets/img/logo.png"
import bir from "../assets/img/bir.jpg"
import iki from "../assets/img/iki.jpg"
import uc from "../assets/img/uc.jpg"
export class Footer extends Component {
    render() {
        return (
            <>


                <div className="footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3 g-5 ">
                                <div className="photo  ">
                                    <img className='mt-3 ' width={250} src={photo} alt="" />
                                </div>

                                <div className="writing mt-3">
                                    <h4 style={{ color: "white" }} className='mx-3'> Woodstock is a Modern Fully Responsive Retina Ready Woocommerce theme. Start your Store right away with Woodstock theme.</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="header mt-5">
                                    <h4 style={{ color: "white" }} >FEATURED PRODUCTS</h4>
                                </div>
                                <div className="first d-flex ">
                                    <img width={50} src={bir} alt="" />

                                    <div className="tag">
                                        <h6 style={{ color: "white" }} >Jules Audemars</h6>
                                        <h5 style={{ color: "orange" }} >$1,200.00 – $2,300.00</h5>
                                    </div>

                                </div>

                                <div className="second d-flex mt-3">
                                    <img width={50} src={iki} alt="" />

                                    <div className="write">
                                        <h6 style={{ color: "white" }} >Jules Audemars</h6>
                                        <h5 style={{ color: "orange" }} >$1,200.00 – $2,300.00</h5>
                                    </div>
                                </div>

                                <div className="third d-flex mt-3">
                                    <img width={50} src={uc} alt="" />

                                    <div className="read">
                                        <h6 style={{ color: "white" }} >Jules Audemars</h6>
                                        <h5 style={{ color: "orange" }} >$1,200.00 – $2,300.00</h5>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="baslig mt-5">
                                    <h4 style={{ color: "white" }} >TOP RATED PRODUCTS</h4>
                                </div>
                                <div className="birinci d-flex ">
                                    <img width={50} src={bir} alt="" />

                                    <div className="yazi">
                                        <h6 style={{ color: "white" }} >Patrimony Ultra Calibre 1742</h6>
                                        <h5 style={{ color: "orange" }} >$8,400.00</h5>
                                    </div>
                                </div>

                                <div className="ikinci d-flex mt-3">
                                    <img width={50} src={bir} alt="" />

                                    <div className="komp">
                                        <h6 style={{ color: "white" }} >Patrimony Ultra Calibre 1742</h6>
                                        <h5 style={{ color: "orange" }} >$8,400.00</h5>
                                    </div>
                                </div>



                                <div className="ucuncu d-flex mt-3">
                                    <img width={50} src={bir} alt="" />
                                    <div className="tel">
                                        <h6 style={{ color: "white" }} >Patrimony Ultra Calibre 1742</h6>
                                        <h5 style={{ color: "orange" }} >$8,400.00</h5>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="end mt-5">
                                    <h4 style={{ color: "white" }}>LATEST NEWS</h4>


                                </div>

                                <div className="ptag">
                                    <p style={{color:"orange"}}>Oh, Princess Leia, are you all right?
                                        Your time is limited…
                                        Tour of Envato’s Melbourne Headquarters
                                        TemashDesign Portfolio</p>
                                </div>

                                <div className="endtag">
                                    <h4 style={{ color: "white" }}>NEWSLETTER</h4>
                                </div>

                              <form className='mt-3' >
                                <input style={{color:"white"}} placeholder='Enter your email' type="text" />
                                <button  >Subscribe</button>
                              </form>

                            </div>

                        </div>
                    </div>




                </div>




            </>
        )
    }
}

export default Footer