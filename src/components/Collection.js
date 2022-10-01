import React, { Component } from 'react'
import Filter from './Filter'
import Pizza from './Pizza'
import '../style/collection.css'
import categories from '../data/categories.json'
import pizzaList from '../data/pizza_list.json'


class Collection extends Component {
  
  backgroundConst = "background"
  baseConst = "base"
  firstLayerConst = "firstLayer"
  secondLayer = "secondLayer"
  thirdLayer = "thirdLayer"
  
  constructor(props) {
    super(props)
    
    this.state = {
      background: "-1",
      base : "-1",
      firstLayer : "-1",
      secondLayer : "-1",
      thirdLayer : "-1",
      filteredList : pizzaList
    }
    this.filterUpdated = this.filterUpdated.bind(this)
    this.buildNewState = this.buildNewState.bind(this)
    this.updatePizzaList = this.updatePizzaList.bind(this)
    this.filterPizzaByBackground = this.filterPizzaByBackground.bind(this)
    this.filterPizzaByBase = this.filterPizzaByBase.bind(this)
    this.filterPizzaByFirstLayer = this.filterPizzaByFirstLayer.bind(this)
    this.filterPizzaBySecondLayer = this.filterPizzaBySecondLayer.bind(this)
    this.filterPizzaByThirdLayer = this.filterPizzaByThirdLayer.bind(this)
  }
  
  buildNewState(label, value){
    
    let newState = this.state
    
    if(label === this.backgroundConst){
      newState.background = value
      return newState
    }
    
    if(label === this.baseConst){
      newState.base = value
      return newState
    }
    
    if(label === this.firstLayerConst){
      newState.firstLayer = value
      return newState
    }
    
    if(label === this.secondLayer){
      newState.secondLayer = value
      return newState
    }
    
    if(label === this.thirdLayer){
      newState.thirdLayer = value
      return newState
    }
  }
  
  filterPizzaByBase(pizza){
    if(pizza.Base === this.state.base){
      return true;
    }else{
      return false;
    }
  }
  
  filterPizzaByBackground(pizza){
    if(pizza.Background === this.state.background){
      return true;
    }else{
      return false;
    }
  }
  
  filterPizzaByFirstLayer(pizza){
    if(pizza.Firstlayer === this.state.firstLayer){
      return true;
    }else{
      return false;
    }
  }
  
  filterPizzaBySecondLayer(pizza){
    if(pizza.Secondlayer === this.state.secondLayer){
      return true;
    }else{
      return false;
    }
  }
  
  filterPizzaByThirdLayer(pizza){
    if(pizza.Thirdlayer === this.state.thirdLayer){
      return true;
    }else{
      return false;
    }
  }
  
  updatePizzaList(){
    let filtered = pizzaList
    if(this.state.background !== "-1"){
      filtered = filtered.filter(this.filterPizzaByBackground);
    }
    if(this.state.base !== "-1"){
      filtered = filtered.filter(this.filterPizzaByBase);
    }
    if(this.state.firstLayer !== "-1"){
      filtered = filtered.filter(this.filterPizzaByFirstLayer);
    }
    if(this.state.secondLayer !== "-1"){
      filtered = filtered.filter(this.filterPizzaBySecondLayer);
    }
    if(this.state.thirdLayer !== "-1"){
      filtered = filtered.filter(this.filterPizzaByThirdLayer);
    }
    return filtered
  }
  
  filterUpdated(label, value) {
    let newState = this.buildNewState(label, value)
    
    this.setState(newState, () =>{
      let filteredPizzaList = this.updatePizzaList()
      this.setState({
        filteredList : filteredPizzaList
      })
    })
  }
  
  render() {
    return (
      <div>
      <div className='main-container'>
      <div className='filter'>
      
      <span className='filter-name'>Background color</span>
      <Filter filterUpdated={this.filterUpdated} label={categories[4].category_name} categories={categories[4].options}/>
      <span className='filter-name'>Pizza base</span>
      <Filter filterUpdated={this.filterUpdated} label={categories[0].category_name} categories={categories[0].options}/>
      <span className='filter-name'>Firt Layer</span>
      <Filter filterUpdated={this.filterUpdated} label={categories[1].category_name} categories={categories[1].options}/>
      <span className='filter-name'>Second Layer</span>
      <Filter filterUpdated={this.filterUpdated} label={categories[2].category_name} categories={categories[2].options}/>
      <span className='filter-name'>Third Layer</span>
      <Filter filterUpdated={this.filterUpdated} label={categories[3].category_name} categories={categories[3].options}/>
      </div>
      
      <div className='pizza-list'>
      {
        this.state.filteredList.map(pizza => {
          return <Pizza key={pizza.name} pizzaImage={pizza.img} name={pizza.name} description={pizza.description} shopLink={pizza.link}></Pizza>
        })
      }
      
      </div>
      </div>
      </div>
      )
    }
  }
  
  export default Collection