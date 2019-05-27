import * as React from 'react';
import classNames from '@sindresorhus/class-names';

const outButton = (link, productName, disabled = false) => {
    const key = Math.random();
    console.log(link);
    const buttonClass = classNames({

        disabled: disabled,
    }, link.type);
    const buttoninfo: {
        text?: string;
        icon?: string;
    } = {};
    if (link.type === 'mercadolivre') {
        buttoninfo.text = "Ver no Mercado Livre"
        buttoninfo.icon = "fas fa-hands-helping"

    } else if (link.type === 'webmotors') {
        buttoninfo.text = "Ver no WebMotors"
        buttoninfo.icon = "fas fa-car-side"
    } else if (link.type === 'whatsappFilipe') {
        buttoninfo.text = "Perguntar no Whatsapp"
        buttoninfo.icon = "fab fa-whatsapp"
        link.url = "https://api.whatsapp.com/send?phone=5511950790290&text=Oi!%20Vi%20o%20produto%20%22"+encodeURIComponent(productName)+"%22%20no%20OLKiss%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
    } else {
        buttoninfo.text = "Perguntar no Whatsapp"
        buttoninfo.icon = "fab fa-whatsapp"
        link.url = "https://api.whatsapp.com/send?phone=5511998800912&text=Oi!%20Vi%20o%20produto%20%22"+encodeURIComponent(productName)+"%22%20no%20OLKiss%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
    }
    return (
        <a key={key} href={link.url} className={buttonClass} data-product-name={productName} target="_blank" rel="noopener noreferrer" title="Abre numa nova aba">
            <i className={buttoninfo.icon} /> {buttoninfo.text} <i className="fas fa-external-link-alt"></i>
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
                {outButton({url: product.url, type: product.type}, product.title, product.sold)}
            </div>
        </div>
    );
}
