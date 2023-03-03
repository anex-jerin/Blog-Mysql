import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    email: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = axios.post('/register',inputs)
      console.log(res.status)
    } catch (error) {
      console.log(error)
    }
    
  };
  console.log(inputs);
  return (
    <div className='l-container'>
      <div className='auth'>
        <h1>Register</h1>
        <form>
          <input
            type='text'
            placeholder='Username'
            name='name'
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='email'
            name='email'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <div className='check'>
            <button onClick={handleSubmit}>REGISTER</button>
          </div>
        </form>
        <div className='p-link'>
          <Link className='blue' to='/login'>
            Have an account Login
          </Link>
          <Link className='red' to='/reset'>
            Forgot password ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
