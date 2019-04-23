import * as React from 'react';
import classNames from '@sindresorhus/class-names';
import soldImage from '../../images/vendido.png';

const outButton = (link, disabled = false) => {
    const key = Math.random();
    const buttonClass = classNames({
        disabled: disabled,
    });
    return (
        <a key={key} href={link} className={buttonClass}>
            <i className="fas fa-hands-helping" /> Ver no Mercado Livre
        </a>
    );
};

export default function Product(props) {
    const {product} = props;

    const productClass = classNames('product', {
        sold: product.sold,
    });

    let sold = '';

    if (product.sold) {
        sold = <img className="sold-stamp" src={soldImage} />;
    }

    const imageUrl = `${product.image.url}`;

    return (
        <div className={productClass}>
            <div className="info">
                <div className="product__image">
                    <img className="image" src={imageUrl} alt={product.title} />
                    {sold}
                </div>
                <div className="product__name">{product.title}</div>
            </div>
            <div className="product__links">
                {outButton(product.url, product.sold)}
            </div>
        </div>
    );
}
