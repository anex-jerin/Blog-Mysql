import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='n-container'>
      <div className='logo'>
        <Link to='/'>
          Write <span>way</span>
        </Link>
      </div>
      <div className='links'>
        <Link className='n-link' to='/?cat=art'>
          ART
        </Link>
        <Link className='n-link' to='/?cat=science'>
          SCIENCE
        </Link>
        <Link className='n-link' to='/?cat=technology'>
          TECHNOLOGY
        </Link>
        <Link className='n-link' to='/?cat=cinema'>
          CINEMA
        </Link>
        <Link className='n-link' to='/?cat=sports'>
          SPORTS
        </Link>
        <Link className='n-link' to='/?cat=food'>
          FOOD
        </Link>
        <span>USER</span>
        <span>LOGOUT</span>
        <Link className='write' to='write'>
          WRITE
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
