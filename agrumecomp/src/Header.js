import React from 'react';
import { AiFillFrown} from "react-icons/ai";
import { BsHandIndex, BsArrowDownShort} from "react-icons/bs";
import FaHandPointLeft from "react-icons/"
import Logo from "./img/logo_white_200.png";
import "./scss/_variables.scss"

export default function Header() {
  return (
    <>
    <header className="App-header">
      <div className='header_nav'>
        <BsHandIndex className='header_nav_logo'/>
        <h2 className='header_nav_title'> 
          <span>ACCEDER à LA <br/>:</span> 
          <span>GESTION CSE</span>
        </h2>
      </div>
        <h1 className='header_logo'>
          <img src={Logo} alt="logo_agrume"/>
        </h1>
        <div className='header_login'>
          <h2>Utilisateur</h2>
          < BsArrowDownShort/>
          </div>
    </header>
    </>
  )
}
