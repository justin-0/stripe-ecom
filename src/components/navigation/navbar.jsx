import { Link } from 'react-router-dom';
import Logo from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { signOutUser } from '../../utils/firebase/firebase';

import './navbar.scss';

const Navbar = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log('Context User:', currentUser);

	const handleClick = async () => {
		await signOutUser(setCurrentUser);
	};

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
					<Link to='/auth' className='nav-link' onClick={handleClick}>
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
