import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from '@sindresorhus/class-names';
import soldImage from '../images/vendido.png';

import products from '../data/products.json';

const product = (product, index) => {
    const productClass = classNames('product', {
        olx: product.links.olx,
        ml: product.links.ml,
        enjoei: product.links.enjoei,
        sold: product.sold,
    });

    const outButton = (link, service, disabled = false) => {
        const key = Math.random();
        const buttonClass = classNames(service, {
            disabled: disabled,
        });
        return (
            <a key={key} href={link} className={buttonClass}>
                {service}
            </a>
        );
    };

    let sold = '';

    if (product.sold) {
        sold = <img className="sold-stamp" src={soldImage} />;
    }

    return (
        <div key={`product-${index}`} className={productClass}>
            <div className="info">
                <div className="product__image">
                    <img
                        className="image"
                        src={product.cover}
                        alt={product.name}
                    />
                    {sold}
                </div>
                <div className="product__name">{product.name}</div>
            </div>
            <div className="product__links">
                {Object.entries(product.links).map(([service, link]) => {
                    return outButton(link, service, product.sold);
                })}
            </div>
        </div>
    );
};

const app = products.map(product);

ReactDOM.render(app, document.getElementById('app'));
