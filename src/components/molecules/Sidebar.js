import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Profil } from '../../assets/image';
import {
  Close, EditNotif, Home, Logout, PushNotif,
} from '../../icons';
import { Button } from '../atoms';

function Sidebar() {
  const history = useHistory();

  function toggleRightSideBar() {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.main').classList.toggle('active');
  }

  function logout(event) {
    event.preventDefault();
    history.push('login');
  }
  return (
    <div className="navigation">

      <ul>
        <div>
          <div className="flex justify-end">

            <Button onClick={toggleRightSideBar} style={{ backgroundColor: 'transparent' }} className="toggleMenu">
              <Close fill="white" />
            </Button>
          </div>
          <div className="profile">
            <img alt="profile" src={Profil} width={100} height={100} />
            <h3 className="fullname">Joko Widodo</h3>
          </div>

          <li>
            <Link to="/dashboard" onClick={toggleRightSideBar}>
              <span className="icon"><Home /></span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/pushNotification" onClick={toggleRightSideBar}>
              <span className="icon"><PushNotif /></span>
              <span className="title">Push Notification</span>
            </Link>
          </li>
          <li>
            <Link to="/editNotification" onClick={toggleRightSideBar}>
              <span className="icon"><EditNotif /></span>
              <span className="title">Edit Notification</span>
            </Link>
          </li>
          <li>
            <Link to="/statistic" onClick={toggleRightSideBar}>
              <span className="icon"><EditNotif /></span>
              <span className="title">Statistics</span>
            </Link>
          </li>
          <li>
            <Link to="/editOperator" onClick={toggleRightSideBar}>
              <span className="icon"><EditNotif /></span>
              <span className="title">Edit Operator</span>
            </Link>
          </li>
        </div>
        <div>
          <li className="mb2">
            <a href="/" onClick={logout}>
              <span className="icon"><Logout /></span>
              <span className="title">Logout</span>
            </a>
          </li>
        </div>

      </ul>

    </div>
  );
}

export default Sidebar;
