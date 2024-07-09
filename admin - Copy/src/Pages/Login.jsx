import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const adminEmail = 'admin@example.com';
  const adminPassword = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      navigate('/admin');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='container'>
    <div className='login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h1>Admin Login</h1>
        {/* <label>Email:</label> */}
        <input className='email-css' type="email" placeholder='Admin Email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
        {/* <label>Password:</label> */}
        <input className='password-css' type="password" placeholder='Admin Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className='btn-css' type="submit" style={{ marginTop: '20px' }}><b>Login</b></button>
      </form>
    </div>
    </div>
  );
};

export default Login;
