import React from 'react';
import { Button } from 'react-bootstrap';
import './login.css';

export default function login() {
  return (
<div>
  <h1> Login </h1><br />
    <div className="form">
    <form>
      <h2> Email </h2>
      <input type = "textfield" />
      <h2> Password </h2>
      <input className="password" type = "textfield" /><br/>
      <Button className="btn btnforgot" >Forgot Password?</Button>
      <Button className="btn btnlogin">Login</Button>
    </form>
    </div>
</div>
  );
}

