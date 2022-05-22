import React from 'react';
import { Link } from 'react-router-dom';
import {CartBlock} from '../cart-block';
import './header.css';

export const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
            <Link to='/' className='header__store-title'>
                <img src="logo.png" alt="logo" width={55} height={55}/>
                <p>Game Store</p>
            </Link>
        </div>
        <div className="wrapper header__cart-btn-wrapper">
            <CartBlock />
        </div>
    </div>
  )
}
