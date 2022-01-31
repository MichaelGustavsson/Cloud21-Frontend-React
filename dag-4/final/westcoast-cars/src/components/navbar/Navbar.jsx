import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <header className='navbar'>
      <h2>WestCoast Cars</h2>
      <div className='navbar-items'>
        <NavLink to={{ pathname: '/' }}>Våra bilar</NavLink>
        <NavLink to={{ pathname: '/about' }}>Om Oss</NavLink>
      </div>
    </header>
  );
}

export default NavBar;
