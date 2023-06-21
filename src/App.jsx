import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/home/home';
import Navigation from './components/navigation/navbar';
import Signin from './pages/signin/signin';

const Layout = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<h4>SHOPPING</h4>} />
				<Route path='sign-in' element={<Signin />} />
			</Route>
		</Routes>
	);
};

export default App;
