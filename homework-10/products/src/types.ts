export interface ProductItem {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

export type Action = {
    type: 'TOGGLE_IN_STOCK';
    payload: number;
}
