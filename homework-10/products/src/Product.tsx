import React from 'react';
import { ProductItem, Action } from './types'

interface ProductProps extends ProductItem {
    dispatch: React.Dispatch<Action>;
}

const Product: React.FC<ProductProps> = ({ id, name, price, inStock, dispatch }) => {
    return (
        <div className="product">
            <p className={ inStock ? 'in-stock' : 'out-of-stock' }>
                {name} - ${price}
            </p>
            <button onClick={() => dispatch({ type: 'TOGGLE_IN_STOCK', payload: id })}>
                {inStock ? 'Set Out of Stock' : 'Set In Stock'}
            </button>
        </div>
    );
};

export default Product;