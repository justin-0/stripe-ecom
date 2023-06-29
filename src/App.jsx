import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/home/home';
import Navigation from './components/navigation/navbar';
import Authentication from './pages/authentication/authentication';
import Shop from './pages/shop/shop';

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
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
