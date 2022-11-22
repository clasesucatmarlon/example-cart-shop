import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Cart = ({ listCart }) => {
	return (
		<div>
			<h1>Cart</h1>
			{listCart.length > 0 ? (
				listCart.map((element) => {
					return (
						<Product key={element.id}>
							<NameProduct>{element.name}</NameProduct>
							<Quantity>
								Quantity: <span>{element.quantity}</span>
							</Quantity>
						</Product>
					);
				})
			) : (
				<p>No products have been added to the shopping cart</p>
			)}
		</div>
	);
};

Cart.propTypes = {
	listCart: PropTypes.array.isRequired,
};

const Product = styled.div`
	padding: 1.25rem;
	border-bottom: 1px solid #aa9e9e;
	font-size: 1rem;
`;

const NameProduct = styled.p`
	font-weight: bold;
`;

const Quantity = styled.p`
	font-weight: bold;

	span {
		font-weight: normal;
	}
`;

/**
 * This function takes the state of the Redux store as an argument and returns an object that maps the
 * state to the props of the component.
 * @returns The state of the store.
 */
const mapStateToProps = (state) => {
	return {
		listCart: state.cart,
	};
};

export default connect(mapStateToProps)(Cart);
