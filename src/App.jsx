import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/home/home';
import Navigation from './components/navigation/navbar';
import Authentication from './pages/authentication/authentication';

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
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
