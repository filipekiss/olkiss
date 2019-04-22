import * as React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/Product';
import axios from 'axios';
import settings from '../data/settings';
import noImage from '../images/no-image.png';

function renderProduct(product, index) {
    if (this.isFallback) {
        product.image.url = noImage;
    } else {
        product.image.url = `${settings.strapiUrl}/${product.image.url}`;
    }
    return <Product key={`product-${index}`} product={product} />;
}

const targetElement = document.getElementById('app');

axios
    .get(`${settings.strapiUrl}/products`, {timeout: 2500})
    .then(function loadProducts(response) {
        const app = response.data.map(renderProduct, {isFallback: false});
        ReactDOM.render(app, targetElement);
    })
    .catch(function(error) {
        console.error(
            'An error ocurred when trying to fetch the product list from ${strapiUrl}'
        );
        console.warn('Falling back to static data');
        import('../data/products.json').then((products) => {
            const app = products.default.map(renderProduct, {isFallback: true});
            ReactDOM.render(app, targetElement);
        });
    });
