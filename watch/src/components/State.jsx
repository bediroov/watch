import React, { Component } from 'react'

class State extends Component {
    constructor() {
        super();
        this.state =
            [
                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/passession-01-350x350.jpg",
                    baslig: "JEWELLERY",
                    information: "Possession chain motif ring",
                    price: "$1,10000",
                },


                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/montbrilliant-01-350x350.jpg",
                    baslig: "MENS WATCHES",
                    information: "Montbrilliant",
                    price: "$4,3000 -$8,2000",
                },

                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/marina-01-350x350.jpg",
                    baslig: "LADIES WATCHES",
                    information: "Laminar Marina",
                    price: "$3,40000",
                },

                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/tag-carrer-01-350x350.jpg",
                    baslig: "LADIES WATCHES",
                    information: "Tag Heuer Carrera",
                    price: "$5,0500,000",
                },

                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/louis-01-350x350.jpg",
                    baslig: "MENS WATCHES",
                    information: "Patrimony Ultra Calibre",
                    price: "1742",
                },

                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/apwatch-01-350x350.jpg",
                    baslig: "MENS WATCHES",
                    information: "Patrimony Ultra Calibre",
                    price: "1742",
                },

                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/moto360-01-350x350.jpg",
                    baslig: "MENS WATCHES",
                    information: "Patrimony Ultra Calibre",
                    price: "1742",
                },

                {
                    sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/seamaster-sp-01-1-350x350.jpg",
                    baslig: "MENS WATCHES",
                    information: "Patrimony Ultra Calibre",
                    price: "1742",
                },

            ]
    }
 nextBook=()=>{
    this.setState({
        
            sekil: "https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/montbrilliant-06-350x350.jpg",
            baslig: "MENS WATCHES",
            information: "Patrimony Ultra Calibre",
            price: "1742",
        

    })
 }

    render() {
        return (
            <>
                {
                    this.state.map((item, index) => (
                                   
                    
                          <div className="col-12 col-sm-6 col-md-3 g-5">           
                            <div style={{ backgroundColor: "black" }} className="card " >
                                <img src={item.sekil} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 style={{ color: "white" }} className="card-title">{item.baslig}</h5>
                                    <p style={{ color: "white" }} className="card-text">{item.price}</p>
                                <button onClick={this.nextBook} className="btn btn-warning" >next</button>
                                </div>
                            </div>
                        </div>
                      
                        
                     
                    ))
                }
            </>
        )
    }
}


export default State
