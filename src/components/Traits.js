import React, { Component } from 'react'
import '../style/traits.css'
import traitList from '../data/traits.json'

class Traits extends Component {
  
  eth_price = 1000
  voidTrait = "None"
  //toTitleCase = str => str.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())
  
  constructor(props) {
    super(props)
    
    this.state = {
      isBackground : this.props.isBackground,
      trait : this.props.trait,
      tableHeader : this.props.tableHeader
    }
  }
  
  showPrice(price, traitName, isEuro){
    if(traitName === this.voidTrait){
      return "N/A"
    }else{
      if(isEuro){
        return price + "€"
      }else{
        return price + "⟠"
      }
    }
  }
  
  showGrams(value, traitName){
    if(traitName === this.voidTrait){
      return "N/A"
    }else{
      return value + "g"
    }
  }
  
  roundPriceEuro(price, traitName){
    price = Number(price)
    price = (price).toFixed(2)
    return this.showPrice(price, traitName, true)
  }
  
  roundPriceEth(price, traitName){
    price = Number(price)
    price = (price).toFixed(6)
    return this.showPrice(price, traitName, false)
  }
  
  render() {
    if(this.state.isBackground){
      return(<table>
        <caption>{this.state.tableHeader}</caption>
        <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Rarity</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.trait.map(trait => {
            return (
              <tr key={trait.trait_name}>
              <td scope="row" data-label="Name">{trait.trait_name}</td>
              <td data-label="Rarity">{trait.trait_rarity}%</td>
              </tr>
              )
            })
          }
          </tbody>
          </table>)
        }else{
          return(<table>
            <caption>{this.state.tableHeader}</caption>
            <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Rarity</th>
            <th scope="col">Price per kilo (€)</th>
            <th scope="col">amount in grams</th>
            <th scope="col">Total Price (€)</th>
            <th scope="col">Total Price (⟠)</th>
            <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.trait.map(trait => {
                return (
                  <tr key={trait.trait_name}>
                  <td scope="row" data-label="Name">{trait.trait_name}</td>
                  <td data-label="Rarity">{trait.trait_rarity}%</td>
                  <td data-label="Price per kilo (€)">{this.roundPriceEuro(trait.trait_price, trait.trait_name)}</td>
                  <td data-label="amount in grams">{this.showGrams(trait.trait_quantity, trait.trait_name)}</td>
                  <td data-label="Total Price (€)">{this.roundPriceEuro((trait.trait_quantity * trait.trait_price / 1000), trait.trait_name)}</td>
                  <td data-label="Total Price (⟠)">{this.roundPriceEth(((trait.trait_quantity * trait.trait_price / 1000) / this.eth_price), trait.trait_name)}</td>
                  <td data-label="Description">{trait.trait_description}</td>
                  </tr>
                  )
                })
              }
              </tbody>
              </table>)
            }
          }
        }
        
        export default Traits