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
			// console.log('se ejecuta la función en reducer');
			// console.log('id', action.idProdAdd);
			// console.log('name', action.nameProdAdd);
			return state;
		default:
			return state;
	}
};

export default reducer;
