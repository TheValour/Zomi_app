import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [flag, setFlag] = useState(false);
  const onclickHandler = () => {
    setFlag(pre => !pre)
  }
  return (
    <nav className="navbar-container">
      { flag && 
        <button className='moblile-nav-toogle' onClick={onclickHandler}>
          <span>Menu</span>
        </button> 
      }
      <span className='Romi' onClick={onclickHandler}>Romi Finance</span>
      
      <ul className="navbar-menu" data-visible={flag}>
        <li onClick={() => setFlag(false)}>
          <NavLink exact to="/" activeClassName="active-link" >
            Home
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/dashboard" activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/nft" activeClassName="active-link">
            NFT
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/earn" activeClassName="active-link">
            Earn
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/buy" activeClassName="active-link">
            Buy
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/referrals" activeClassName="active-link">
            Referrals
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/ecosystem" activeClassName="active-link">
            Ecosystem
          </NavLink>
        </li>
        <li onClick={() => setFlag(false)}>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
      </ul>
        <button className='trade flex align-center p-2'>Trade</button>
        <button className='wallet'>Connect Wallet</button>
    </nav>
  );
}

export default Navbar;
