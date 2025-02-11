import React, { useReducer } from 'react';
import { ProductItem, Action } from './types'
import ProductsList from './ProductsList';
import './App.css';

type State = ProductItem[];

// Initial state
const initial_state: State = [
    { id: 1, name: 'Apple', price: 1, inStock: true},
    { id: 2, name: 'Banana', price: 1, inStock: false},
    { id: 3, name: 'Cherry', price: 2, inStock: true}, 
];

// reducer function
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'TOGGLE_IN_STOCK':
            return state.map((product) => 
                product.id === action.payload ? { ...product, inStock: !product.inStock } : product);
        default:
            return state;    
    }
}

// App Component
const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initial_state);

    return (
        <div className="App">
            <h1>Product List</h1>
            <ProductsList products={state} dispatch={dispatch} />
        </div>
    );
};

export default App;
