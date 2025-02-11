import React from 'react';
import { ProductItem } from './types'
import Product from './Product';

interface ProductsListProps {
    products: ProductItem[];
    toggleInStock: (id: number) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, toggleInStock }) => {
    return (
        <div className="products-list">
            { products.map((product) => (
                <Product key={product.id} {...product} toggleInStock={toggleInStock} />
            ))}
        </div>
    );
};

export default ProductsList;
