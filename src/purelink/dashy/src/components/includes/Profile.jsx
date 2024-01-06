import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Profile({userDetails}) {
  return (
    <div className='profile'>
      <div to='/' className="top">
        <NavLink>
            <img src={require("./../assets/images/profile.jpg")} alt="profile" />
            <span className="name"><img src={require("./../assets/images/down-arrow.svg").default} alt="image" /></span>
        </NavLink>
      </div>

      <div className="below">
        <h1 className='top'>
            <img src={require("./../assets/images/history.png")} alt="image" />
            My History
        </h1>
        <div className="history">
            <div className="content">
                <p>You donated B+ blood to Azvan at <span>Meditrina Kollam</span></p>
                <span className="time">3mo ago</span>
            </div>
            <NavLink to='history' className="see">See more..</NavLink>
        </div>
      </div>
    </div>
  )
}
