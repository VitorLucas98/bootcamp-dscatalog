import React from 'react';
import './styles.scss';
import {ReactComponent as ProductImage} from '../../../../assets/images/product.svg';

const ProductCard = () =>(
    <div className="card-base border-radius-10 product-card">
        <ProductImage/>
        <div className ='product-info'>
            <h6 className ='product-name'>Computador Desktop - Intel core i7 </h6>
            <div className="product-price-container">
                <span className ='product-currency'>R$</span>
                <h3 className='product-price'>2779,00</h3>
            </div>
        </div>
    </div>
);

export default ProductCard;