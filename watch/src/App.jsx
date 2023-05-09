import React, { Component } from 'react'
import Headerone from './components/Headerone'
import Headertwo from './components/Headertwo'
import "./assets/sass/style.scss"
import Headerthree from './components/Headerthree'
import Main from './components/Main'
import products from './data/products'
import Sectionfive from './components/Sectionfive'
import cards from './data/cards'
import State from './components/State'
import Sectionsix from './components/Sectionsix'
import Footer from './components/Footer'
import Contact from './Contact'










class App extends Component {
  render() {
    return (
      <>
        <Headerone />
        <Headertwo />
        <Headerthree />
        <Main />
        <div className="sectionfive">
          <div className="container">
            <div className="row">

              {products.map((item, i) => (
                <Sectionfive photo={item.photo} title={item.title} number={item.number} />
              ))}


            </div>
          </div>
        </div>


    <div className="state">
    <div className="container">
          <div className="row">
          <State />
          </div>    
        </div>
    </div>

    <div className="sectionsix">
          <div className="container">
            <div className="row">

              {cards.map((soz, i) => (
                <Sectionsix photo={soz.photo} about={soz.about} bottom={soz.bottom} />
              ))}


            </div>
          </div>
        </div>


<Footer/>
  
  <Contact/>
      </>


    )
  }
}

export default App