import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom'; // Import Link
import Axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const response = await Axios.get('http://localhost:8000/login', {
        params: {
          email,
          password,
        },
      });
      setMessage(response.data.message);
      if(response.status===200) {
        navigate('/navbar');
      }
    }
      catch (error) {
        console.error(error);
        setMessage('An error occurred');
    } 
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <br />
      <button onClick={handleLogin} className="btn"><Link to="/navbar"></Link>
        Login
      </button>
      <p>If you don't have an account, <Link to="/signup">click here to sign up</Link></p>
      <p>{message}</p>
    </div>
  );
}

export default Login;
