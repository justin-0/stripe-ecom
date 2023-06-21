import { Link } from 'react-router-dom';
import Logo from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import './navbar.scss';

const Navbar = () => {
	const { currentUser } = useContext(UserContext);
	console.log('Context User:', currentUser);

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
					<Link to='/auth' className='nav-link'>
						SIGN OUT
					</Link>
				) : (
					<Link to='/auth' className='nav-link'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
