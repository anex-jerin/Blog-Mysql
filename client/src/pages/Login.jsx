const Login = () => {
  return (
    <div className='l-container'>
      <div className='auth'>
        <h1>Login</h1>
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <div className='check'>
            <div>
              <input type='checkbox' id='remember' />{' '}
              <label htmlFor='remember'>Remember me</label>
            </div>
            <button>LOGIN</button>
          </div>
        </form>
        <div className='p-link'>
          <a className="blue" href='/register'> Register now</a>
          <a className="red" href='/reset'>Forgot password ?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
