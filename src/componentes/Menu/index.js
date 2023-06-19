/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sobre from '../Sobre';
import './Menu.css'

function Menu({home, sobre, contato, solucoes}){
    return (
        <div className="menu">
   <ul>
      <li><a href="#">{home}</a></li>
      <li><a href="#">{sobre}</a></li>
      <li><a href="#">{solucoes}</a></li>
      <li><a href="#">{contato}</a></li>
   </ul>
</div>

    )
}

export default Menu;