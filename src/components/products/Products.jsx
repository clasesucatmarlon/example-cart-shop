import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Products = ({ allProducts }) => {
	return (
		<div>
			<ContainerProducts>
				{allProducts.map((prod) => {
					return (
						<>
							<Product key={prod.id}>
								<p>{prod.name}</p>
								<p>
									Quantity: <span>{prod.quantity}</span>
								</p>
								<Button>Add to cart</Button>
							</Product>
						</>
					);
				})}
			</ContainerProducts>
		</div>
	);
};

Products.propTypes = {
	allProducts: PropTypes.array.isRequired,
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

export default Products;