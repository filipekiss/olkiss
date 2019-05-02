import * as React from 'react';
import classNames from '@sindresorhus/class-names';
import soldImage from '../../images/vendido.png';

const outButton = (link, productName, disabled = false) => {
    const key = Math.random();
    const buttonClass = classNames({
        disabled: disabled,
    });
    return (
        <a key={key} href={link} className={buttonClass} data-product-name={productName} target="_blank" rel="noopener noreferrer" title="Abre numa nova aba">
            <i className="fas fa-hands-helping" /> Ver no Mercado Livre <i className="fas fa-external-link-alt"></i>
        </a>
    );
};

const productPrice = (price) {
    if (price) {
        const centsPrice = String(price).substr(-2);
        const intPrice = String(price).substr(0, String(price).length - 2);
        let centsElem = '';
        if (Number(centsPrice) > 0) {
            centsElem = <small>{centsPrice}</small>
        }
        return <div className="product__price">{intPrice}{centsElem}</div>
    }
    return;
}

export default function Product(props) {
    const {product} = props;

    const productClass = classNames('product', {
        ['product--sold']: product.sold,
    });

    const imageUrl = `${product.image}`;

    return (
        <div className={productClass}>
            <div className="product__info">
                <div className="product__image">
                    <img className="image" src={imageUrl} alt={product.title} />
                </div>
                <div className="product__details">
                    <div className="product__name">{product.title}</div>
                    {productPrice(product.price)}
                </div>
            </div>
            <div className="product__links">
                {outButton(product.url, product.title, product.sold)}
            </div>
        </div>
    );
}
