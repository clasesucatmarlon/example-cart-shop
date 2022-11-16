import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Products = ({ allProducts, addToCart }) => {
	return (
		<div>
			<ContainerProducts>
				{allProducts.map((prod) => {
					return (
						<Product key={prod.id}>
							<p>{prod.name}</p>
							<p>
								Stock: <span>{prod.stock}</span>
							</p>
							<Button onClick={() => addToCart(prod.id, prod.name)}>
								Add to cart
							</Button>
						</Product>
					);
				})}
			</ContainerProducts>
		</div>
	);
};

Products.propTypes = {
	allProducts: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
};

const ContainerProducts = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.25rem;
	padding: 1.25rem 0;
`;

const Product = styled.div`
	padding: 1.25rem;
	border: 1px solid #aa9e9e;
	border-radius: 5px;
	text-align: center;

	p {
		margin-bottom: 0.6rem;
		font-weight: bold;
		font-size: 1rem;
	}

	span {
		font-weight: normal;
	}
`;

const Button = styled.button`
	border: none;
	background: #1c85e8;
	color: #fff;
	font-size: 1rem;
	font-weight: bold;
	font-family: 'Open Sans', sans-serif;
	text-align: center;
	display: inline-block;
	padding: 0.7rem 1.25rem;
	cursor: pointer;
	width: 100%;
	border-radius: 5px;
	transition: 0.3s ease all;

	&:hover {
		background: #092c4c;
	}
`;

/**
 * This function takes the state of the Redux store as an argument and returns an object that maps the
 * state to the props of the component.
 * @returns The state of the store.
 */
const mapStateToProps = (state) => {
	return {
		allProducts: state.products,
	};
};

export default connect(mapStateToProps)(Products);
