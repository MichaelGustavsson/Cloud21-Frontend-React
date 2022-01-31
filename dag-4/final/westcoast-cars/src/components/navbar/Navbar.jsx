import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <header className='navbar'>
      <h2>WestCoast Cars</h2>
      <div className='navbar-items'>
        {/* <a href='/'>Våra bilar</a>
        <a href='/about'>Om Oss</a> */}
        {/* <Link to={{ pathname: '/' }}>Våra bilar</Link>
        <Link to={{ pathname: '/about' }}>Om Oss</Link> */}
        {/* <NavLink
          className={({ isActive }) => (isActive ? 'link-active' : '')}
          to={{ pathname: '/' }}>
          Våra bilar
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'link-active' : '')}
          to={{ pathname: '/about' }}>
          Om Oss
        </NavLink> */}
        <NavLink to={{ pathname: '/' }}>Våra bilar</NavLink>
        <NavLink to={{ pathname: '/about' }}>Om Oss</NavLink>
      </div>
    </header>
  );
}

export default NavBar;
