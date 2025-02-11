import React from 'react';
import { ProductItem } from './types'

interface ProductProps extends ProductItem {
    toggleInStock: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, name, price, inStock, toggleInStock }) => {
    return (
        <div className="product">
            <p className={ inStock ? 'in-stock' : 'out-of-stock' }>
                {name} - ${price}
            </p>
            <button onClick={() => toggleInStock(id)}>
                {inStock ? 'Set Out of Stock' : 'Set In Stock'}
            </button>
        </div>
    );
};

export default Product;