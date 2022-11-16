import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Blog from './components/blog/Blog';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Error404 from './components/404/Error404';
import Cart from './components/cart/Cart';
import { Provider } from 'react-redux'; // Redux
import { createStore } from 'redux'; // Redux
import reducer from './reducers/shopReducer';
import allProducts from './data/allProducts';

const App = () => {
	const [listCart, setListCart] = useState([]);

	/**
	 * Function to add items to cart
	 * @param {idProd} idProd product id to be added
	 * @param {nameProd} nameProd product name to be added
	 */
	const addToCart = (idProd, nameProd) => {
		if (listCart.length === 0) {
			setListCart([{ id: idProd, name: nameProd, quantity: 1 }]);
		} else {
			// Clonar listCart
			const newListCart = [...listCart];
			// Comprobar si el cart ya tiene el id
			const foundProdInCart =
				newListCart.filter((item) => item.id === idProd).length > 0;
			if (foundProdInCart) {
				// Si ya está el id se actualiza el cart en base a la posición
				newListCart.forEach((prodCart, index) => {
					if (prodCart.id === idProd) {
						const quantityProd = newListCart[index].quantity;
						newListCart[index] = {
							id: idProd,
							name: nameProd,
							quantity: quantityProd + 1,
						};
					}
				});
			} else {
				newListCart.push({ id: idProd, name: nameProd, quantity: 1 });
			}
			setListCart(newListCart);
		}
	};

	// reducer función que permite administrar nuestro estado global
	const store = createStore(reducer);
	console.log(store.getState()); // Mostrar los elementos del estado global

	return (
		<Provider store={store}>
			<Container>
				<Menu>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/blog'>Blog</NavLink>
					<NavLink to='/shop'>Shop</NavLink>
				</Menu>

				<main>
					<Routes>
						<Route path='*' element={<Error404 />} />
						<Route path='/' element={<Home />} />
						<Route path='/blog' element={<Blog />} />
						<Route
							path='/shop'
							element={<Shop allProducts={allProducts} addToCart={addToCart} />}
						/>
					</Routes>
				</main>

				<aside>
					<Cart listCart={listCart} />
				</aside>
			</Container>
		</Provider>
	);
};

const Container = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 40px;
		font-size: 1.5rem;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;

export default App;
