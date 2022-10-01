import React, { Component } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../style/navbar.css'
import logo from '../logo.png'

export class Navbar extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            clicked: false
        }
        
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        this.setState({
            clicked: !this.state.clicked
        }, () => {
            if(this.state.clicked){
                document.body.className = "scroll"
            }else{
                document.body.className = ""
            }
        })
    }
    
    render() {
        return (
            <nav>
                <span className='logo'>
                <img src = {logo} width="55" height="55"></img>
                <span className='project-name'>CryptoPizzas</span>
                </span>

            <div>
            <ul id='navbar' className={this.state.clicked ? "navbar active" : "navbar"}>
            <CustomLink to="/">Collection</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <li>
            <a href="https://linktr.ee/cryptopizzas_it">Social</a>
            </li>
            </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
            <i id='icons' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            </nav>
            )
        }
    }
    
    export default Navbar
    
    function CustomLink({to, children, ...props}){
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
        return(
            <li>
            <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
            </li>
            )
        }