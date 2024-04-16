import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './navbar.css'

function Navbar() {
  return (
    <nav className='navigation-field'>
      <img src={Logo} alt='Företagslogga, bild på en uggla.' />
      <ul className='navigation-field__nav-list'>
        <li className='navigation-field__nav-item'>
          <Link to='/' className=''>Home</Link>
        </li>
        <li className='navigation-field__nav-item'>
          <Link to='/favourites' className=''>Favourites</Link>
        </li>
        <li className='navigation-field__nav-item'>
          <Link to='/watchlist' className=''>Watchlist</Link>
        </li>

      </ul>
    </nav>

  );
}

export default Navbar;