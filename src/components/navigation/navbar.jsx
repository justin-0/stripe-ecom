import { Link } from 'react-router-dom';
import Logo from '../../assets/crown.svg';

import './navbar.scss';

const navbar = () => {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-container'>
				<img src={Logo} className='logo' />
			</Link>
			<div className='nav-links-container'>
				<Link to='/shop' className='nav-link'>
					SHOP
				</Link>
				<Link to='/' className='nav-link'></Link>
				<Link to='/' className='nav-link'></Link>
			</div>
		</div>
	);
};

export default navbar;
