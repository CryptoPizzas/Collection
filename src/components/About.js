import React, { Component } from 'react'
import '../style/about.css'
import Traits from './Traits'
import traitList from '../data/traits.json'

class About extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      background: traitList[0],
      base : traitList[1],
      firstLater : traitList[2],
      secondLater : traitList[3],
      thirdLater : traitList[4],
    }
  }
  
  render(){
    return (
      <div className='about'>
      <h2 className='question'>
      What is CryptoPizzas?
      </h2>
      <p className='answer'>
      <b>CryptoPizzas</b> is an Italian NFT project inspired by one of the most popular foods in the world: the Pizza 🍕! The collection is composed of 300 NFT. Each week 6 NFT will be dropped!
      Unlike other projects, Cryptopizzas has low prices based on the pizza's ingredients and toppings. The great variety of toppings makes it possible to generate thousands of different pizzas and satisfy all tastes. Have fun collecting and trading your favorite pizzas!
      
      </p>
      
      <div><button onClick={(e) => {
        e.preventDefault();
        window.location.href='https://opensea.io/collection/cryptopizzas-it';
      }} className='buy-now'>Buy your CryptoPizza now!</button></div>
      <h2 className='question'>
      How is the price calculated?
      </h2>
      <p className='answer'>
      The price of an NFT, in Ethereum, is calculated by adding the costs of the individual ingredients and toppings to which a fixed cost of €3 is added.
      The tables show the ingredient prices per kilo of all possible ingredients and toppings, and the final cost in Euros and Ethereum.
      The background color and the <i>None</i> attribute add <b>no additional</b> costs. The EUR / ETH exchange rate is fixed at 1 ⟠ = 1000 €.
      </p>
      <h2 className='question'>
      Can you give an example?
      </h2>
      <p className='answer'>
      A white pizza with sausage, mushrooms and origan will cost 10.35 € = 0.01035 ⟠. Explanation:<br/>
      • White pizza’s cost: € 1.75<br/>
      • Sausage’s cost: € 1.10<br/>
      • Mushrooms’ cost: € 3.60<br/>
      • Origan’s cost: € 0.90<br/>
      <b>Total cost (€)</b>: 7.35 € + 3 € = 10.35 €<br/>
      <b>Total cost (⟠)</b>: 0.01035 ⟠  
      </p>
      <div>
      <h2 className='question'>
      What are the traits? 
      </h2>
      <p className='answer'>
      The tables below show the available traits, their rarity, the cost in Euro and Ethereum and a description.
      </p>
      <h2 className='question'>
      What is the <i>None</i> attribute?
      </h2>
      <p className='answer'>
      The attribute <i>None</i> is used to indicate the absence of a topping for that layer and allows to increase the number of pizzas and satisfy many more tastes!
      </p>
      
      <Traits tableHeader = "Background Color" trait = {this.state.background} isBackground = {true}></Traits>
      <Traits tableHeader = "Pizza Base" trait = {this.state.base} isBackground = {false}></Traits>
      <Traits tableHeader = "Firt Layer" trait = {this.state.firstLater} isBackground = {false}></Traits>
      <Traits tableHeader = "Second Layer" trait = {this.state.secondLater} isBackground = {false}></Traits>
      <Traits tableHeader = "Third Layer" trait = {this.state.thirdLater} isBackground = {false}></Traits>
      </div>
      </div>
      )
    }
  }
  
  export default About