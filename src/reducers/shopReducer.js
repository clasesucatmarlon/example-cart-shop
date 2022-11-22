import stateInitial from '../data/dataProducts';

/**
 * Function to managment the global state
 * @param [state] - This is the current state of the store, is the initial state
 * @param action - An object that represents the action that was dispatched.
 * @returns The reducer is returning the state.
 */
const reducer = (state = stateInitial, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT_TO_CART':
			// console.log(state.cart)
			if (state.cart.length === 0) {
				return {
					...state,
					cart: [
						{ id: action.idProdAdd, name: action.nameProdAdd, quantity: 1 },
					],
				};
			} else {
				// Clonar listCart
				const newListCart = [...state.cart];
				// Comprobar si el cart ya tiene el id
				const foundProdInCart =
					newListCart.filter((item) => item.id === action.idProdAdd).length > 0;

				if (foundProdInCart) {
					// Si ya está el id se actualiza el cart en base a la posición
					newListCart.forEach((prodCart, index) => {
						if (prodCart.id === action.idProdAdd) {
							const quantityProd = newListCart[index].quantity;
							newListCart[index] = {
								id: action.idProdAdd,
								name: action.nameProdAdd,
								quantity: quantityProd + 1,
							};
						}
					});
				} else {
					newListCart.push({
						id: action.idProdAdd,
						name: action.nameProdAdd,
						quantity: 1,
					});
				}
				return {
					...state,
					cart: newListCart,
				};
			}
		default:
			return state;
	}
};

export default reducer;
