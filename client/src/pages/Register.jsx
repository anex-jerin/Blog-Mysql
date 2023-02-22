const Register = () => {
  return (
    <div className='l-container'>
      <div className='auth'>
        <h1>Register</h1>
        <form>
          <input type='text' placeholder='Username' />
          <input type='text' placeholder='Name' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Repeat password' />
          <div className="check">
            <button>REGISTER</button></div>
        </form>
        <div className='p-link'>
          <a className='blue' href='/login'>
            Login now
          </a>
          <a className='red' href='/reset'>
            Forgot password ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
