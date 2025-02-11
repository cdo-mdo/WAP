interface Product {
    id: number,
    name: string,
    price: number,
    inStock: boolean
}

type State = Product[];

const initial_state: State = {
    { id: 1, name: 'Apple', price: 1, inStock: true},
    { id: 2, name: 'Banana', price: 1, inStock: false},
    { id: 3, name: 'Cherry', price: 2, inStock: true},
}