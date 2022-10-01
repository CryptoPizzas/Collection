import React from 'react'

import '../style/pizza.css'

function Pizza({pizzaImage, name, description}) {
  return (
    <div className='pizza-row'>
    <div className='pizza-image'>
    <img id = 'image' src={pizzaImage} alt="Pizza" height="150" />
    </div>
    <div className='pizza-details'>
    <h3>{name}</h3>
    <p>{description}</p>
    <button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://opensea.io/collection/cryptopizzas-it';
    }} className='shop-button'>Buy now!</button>
    </div>
    </div>
    /*
    <div className='pizza-row'>
    <div className='pizza-image'>
    <img id = 'image' src={props.pizzaImage} alt="Pizza" height="150" />
    </div>
    <div className='pizza-details'>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <button onClick={(e) => {
      e.preventDefault();
      window.location.href={props.shopLink};
    }} className='shop-button'>Buy now!</button>
    </div>
    </div>
    */
    )
  }
  
  export default Pizza