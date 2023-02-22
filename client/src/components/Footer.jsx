import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='f-container'>
      <div className='logo'>
        <Link to='/'>
          Write <span>way</span>
        </Link>
      </div>
      <span><h6> Made with React JS,  MySQL,  Node JS </h6></span>
    </div>
  );
};

export default Footer;
