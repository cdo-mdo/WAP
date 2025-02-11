import React from 'react';
import { ProductItem, Action } from './types'
import Product from './Product';

interface ProductsListProps {
    products: ProductItem[];
    dispatch: React.Dispatch<Action>;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, dispatch }) => {
    return (
        <div className="products-list">
            { products.map((product) => (
                <Product key={product.id} {...product} dispatch={dispatch} />
            ))}
        </div>
    );
};

export default ProductsList;
