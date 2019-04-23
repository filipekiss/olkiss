import * as React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/Product';
import settings from '../data/settings';
import noImage from '../images/no-image.png';

export type Image = {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
    public_id?: any;
    created_at: number;
    updated_at: number;
};

export type User = {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: number;
    blocked?: any;
    role: number;
    product: number;
};

export type Product = {
    id: number;
    title: string;
    url: string;
    description: string;
    price: number;
    sold?: any;
    created_at: number;
    updated_at: number;
    image: Image;
    users: User[];
};

export type ProductsResponse = {
    data: Product[];
};

export type ProductsFallback = {
    default: ProductsResponse;
};

function renderProduct(product: Product, index: number) {
    return <Product key={`product-${index}`} product={product} />;
}

const targetElement = document.getElementById('app');

import('../data/products.json').then((products: ProductsFallback) => {
    const app = products.default.map(renderProduct, {isFallback: true});
    ReactDOM.render(app, targetElement);
});
