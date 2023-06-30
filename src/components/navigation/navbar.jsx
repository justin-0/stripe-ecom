import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';

import { UserContext } from '../../context/userContext';
import { signOutUser } from '../../utils/firebase/firebase';

import './navbar.scss';

const Navbar = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<div className='navigation'>
			<Link to='/' className='logo-container'>
				<img src={Logo} className='logo' />
			</Link>
			<div className='nav-links-container'>
				<Link to='/shop' className='nav-link'>
					SHOP
				</Link>
				{currentUser ? (
					<Link to='/auth' className='nav-link' onClick={signOutUser}>
						SIGN OUT
					</Link>
				) : (
					<Link to='/auth' className='nav-link'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
		</div>
	);
};

export default Navbar;
