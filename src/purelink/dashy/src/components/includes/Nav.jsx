import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='aside'>
      <h1 className='img'>
        <img src={require("./../assets/images/logo.png")} alt="" />
      </h1>
      <nav>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to='dashboard'>
                  <button><img src={require("./../assets/images/dashboard.png")} alt="" /></button>
                  Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to='notification'>
                  <button><img src={require("./../assets/images/bell.png")} alt="" /></button>
                  Notification
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to='want-blood'>
                  <button><img src={require("./../assets/images/blood.png")} alt="" /></button>
                  Want Blood
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to='history'>
                  <button><img src={require("./../assets/images/history.png")} alt="" /></button>
                  History
                </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}
