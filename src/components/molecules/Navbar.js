import React from 'react';
import { Button } from '../atoms';
import { Menu } from '../../icons';

function Navbar() {
  function toggleRightSideBar() {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.main').classList.toggle('active');
  }
  return (
    <div className="topbar">
      <div className="flex items-center">

        <Button onClick={toggleRightSideBar} style={{ backgroundColor: 'transparent' }} className="toggleMenu">
          <Menu />
        </Button>
        <div className="datetime ml5">
          <h3>
            Senin, 26 April 2021
            <br />
            {' '}
            12:00:00
          </h3>
        </div>
      </div>
      <div className="user">
        <h3>admin</h3>
      </div>
    </div>
  );
}

export default Navbar;
