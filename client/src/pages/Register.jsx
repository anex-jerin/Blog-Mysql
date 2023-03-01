import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: '',
  });
  const handleChange = e =>{
    e.preventDefault();
    setInputs(prev=>({[e.target.name]:e.target.value}))
  }

  console.log(inputs)
  return (
    <div className='l-container'>
      <div className='auth'>
        <h1>Register</h1>
        <form>
          <input type='text' placeholder='Username' name='username' />
          <input type='text' placeholder='email' name='email'  />
          <input type='password' placeholder='Password' name='password'  />
          <div className='check'>
            <button onClick={()=>handleChange}>REGISTER</button>
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
