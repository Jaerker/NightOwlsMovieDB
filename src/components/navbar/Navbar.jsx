import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './navbar.css'

function Navbar() {
	return (
		<nav className='navigation-field'>
			<img src={Logo} alt='Företagslogga, bild på en uggla.' />
			<ul className='navigation-field__nav-list'>
				<Link to='/'>
					<li className='navigation-field__nav-item'>
						Genres
					</li>
				</Link>
				<Link to='/favourites'>
					<li className='navigation-field__nav-item'>
						Favourites
					</li>
				</Link>
				<Link to='/watchlist'>
					<li className='navigation-field__nav-item'>
						Watchlist
					</li>
				</Link>
				<Link to='/search'>
					<li className='navigation-field__nav-item'>
						Search
					</li>
				</Link>
			</ul>
		</nav>

	);
}

export default Navbar;