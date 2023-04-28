import React, { useState } from "react";

const Login = ({ change }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
  }

  return (
    <>
  <form onSubmit={handleSubmit}>
  <div className="container">
      <div>
        <label htmlFor="email">Email</label>
        <input className="form-control"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input  className="form-control"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="btn btn-danger mt-3" type="submit">Login</button>
      </div> 
    </form>    
 

    </>
  )
}
export default Login;