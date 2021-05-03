import React from 'react';
import { useHistory } from 'react-router';
import { Logo } from '../assets/image';
import { Button } from '../components';

function Login() {
  const history = useHistory();
  function handleClick() {
    history.push('/dashboard');
  }
  return (
    <div className="flex flex-wrap">
      <div className="flex col-12 sm-col-6 md-col-6 lg-col-6"><div className="loginWrapper bgLogin" /></div>
      <div className="flex col-12 sm-col-6 md-col-6 lg-col-6 ">
        <div className="loginWrapper p2">
          <div className="flex justify-center mb2 mt2">

            <img alt="logo" width={200} height={200} src={Logo} />
          </div>
          <div className="card">
            <div className="cardHeader pr3 pl3 pt3">
              <h3 className="center">Login</h3>
              <div className="textInput">
                <input placeholder="User ID" />
              </div>
              <div className="textInput">
                <input placeholder="Password" />
              </div>
            </div>
            <div className="cardFooter pr3 pl3 pt2 pb2">
              <Button className="btn-block" onClick={handleClick}>Masuk</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
