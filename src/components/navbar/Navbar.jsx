import Logo from '../../assets/logo.svg';
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='navigation-field'>
			<Link to='/'>
				<img src={Logo} alt='Företagslogga, bild på en uggla.' className="logo" />
			</Link>
			<ul className='navigation-field__nav-list'>
				<Link to='/genres'>
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
				<Link to='/trending'>
					<li className='navigation-field__nav-item'>
						Trending
					</li>
				</Link>
			</ul>
		</nav>

	);
}

export default Navbar;