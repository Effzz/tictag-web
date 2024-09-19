import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../../../interfaces/product';

const initialProducts: IProduct[] = [
    {
        id: 1,
        sku: 'SKU001',
        name: 'Product 1',
        price: 29.99,
        description: 'Description for Product 1',
        warrant_expired_at: '2024-12-31',
        created_at: '2021-09-19T16:31:53.596Z'
    },
    {
        id: 2,
        sku: 'SKU002',
        name: 'Product 2',
        price: 59.99,
        description: 'Description for Product 2',
        warrant_expired_at: '2024-11-30',
        created_at: '2021-09-19T16:31:53.596Z'
    },
    {
        id: 3,
        sku: 'SKU003',
        name: 'Product 3',
        price: 89.99,
        description: 'Description for Product 3',
        warrant_expired_at: '2024-10-31',
        created_at: '2021-09-19T16:31:53.596Z'
    }
];

interface ISliceProductsState {
    products: IProduct[];
}

const initialState: ISliceProductsState = {
    products: initialProducts
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = action.payload;
        },
        addProduct(state, action: PayloadAction<Omit<IProduct, 'id'>>) {
            const maxId = state.products.reduce((max, product) => Math.max(max, product.id), 0);
            const newProduct = { ...action.payload, id: maxId + 1 };
            state.products.push(newProduct);
        },
        removeProduct(state, action: PayloadAction<number>) {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        updateProduct(state, action: PayloadAction<IProduct>) {
            const { id, ...changes } = action.payload;
            const index = state.products.findIndex((product) => product.id === id);
            if (index >= 0) {
                state.products[index] = { ...state.products[index], ...changes };
            }
        }
    }
});

export const { setProducts, addProduct, removeProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
