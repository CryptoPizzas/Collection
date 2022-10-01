import React from 'react'

import '../style/pizza.css'

function Pizza({pizzaImage, name, description, shopLink}) {
  return (
    <div className='pizza-row'>
    <div className='pizza-image'>
    <img id = 'image' src={pizzaImage} alt="Pizza" height="150" />
    </div>
    <div className='pizza-details'>
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={shopLink} target="_blank" rel="noreferrer">
    <button className='shop-button'>Buy now!</button>
    </a>
    
    </div>
    </div>
    
    /*
    <button onClick={(e) => {
      e.preventDefault();
      console.log(shopLink)
      window.location.href={shopLink};
    }} className='shop-button'>Buy now!</button>
    
    -------
    
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
      window.location.href='https://opensea.io/collection/cryptopizzas-it';
    }} className='shop-button'>Buy now!</button>
    </div>
    </div>
    */
    )
  }
  
  export default Pizza