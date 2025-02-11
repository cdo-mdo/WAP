import React, { useState } from 'react';
import { ProductItem } from './types'
import ProductsList from './ProductsList';
import './App.css';

type State = ProductItem[];

// Initial state
const initial_state: State = [
    { id: 1, name: 'Apple', price: 1, inStock: true},
    { id: 2, name: 'Banana', price: 1, inStock: false},
    { id: 3, name: 'Cherry', price: 2, inStock: true}, 
];

// App Component
const App: React.FC = () => {
    const [products, setProducts] = useState(initial_state);

    const toggleInStock = (id: number) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? {...product, inStock: !product.inStock } : product
            )
        )
    };

    return (
        <div className="App">
            <h1>Product List</h1>
            <ProductsList products={products} toggleInStock={toggleInStock} />
        </div>
    );
};

export default App;
