// Define TypeScript types for better type safety
type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    [key: string]: any; // Allow extra properties
};

// Base URL for the API
const BASE_URL = 'https://dummyjson.com/products';

// Get all products with pagination
async function get_products(skip: number = 0, limit: number = 30): Promise<void> {
    try {
        const response = await fetch(`${BASE_URL}?skip=${skip}&limit=${limit}`);
        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        const productTitles = data.products.map((product: Product) => product.title);
        console.log('Product Title:', productTitles);
    } catch (error) {
        console.error('Error fetching products: ', error);
    }
}

// Get a single product by ID
async function get_product(id: number): Promise<void> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product');

        const product: Product = await response.json();
        console.log({
            title: product.title,
            description: product.description,
            category: product.category,
            price: product.price
        });
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}

// Add a new product
async function add_product(product: Partial<Product>): Promise<{ ok: boolean }> {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) throw new Error('Failed to add product');

        console.log('Product added successfully');
        return { ok: true };
    } catch (error) {
        console.error('Error adding product:', error);
        return { ok: false };
    }
}

// Update product's title
async function update_product_title(id: number, new_title: string): Promise<{ ok: boolean }> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: new_title }), 
        });

        if (!response.ok) throw new Error('Failed to update product title');

        console.log('Product title updated successfully');
        return { ok: false };
    } catch (error) {
        console.error('Error updating product title:', error);
        return { ok: false };

    }
}

// Delete a product by ID
async function delete_product(id: number): Promise<{ ok: boolean }> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete product');

        console.log('Product delete successfully');
        return { ok:true };

    } catch (error) {
        console.error('Error deleting product:', error);
        return { ok: false };
    }
}

get_products();
get_product(1);
add_product({ title: 'New Product', description: 'A cool new product', category: 'misc', price: 99.99 });
update_product_title(1, 'Updated Product Title');
delete_product(1);

