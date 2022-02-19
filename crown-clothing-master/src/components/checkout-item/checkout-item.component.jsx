import React from 'react';
import './checkout-item.style.scss';
import {connect} from 'react-redux';
import {addItem, reduceItem, removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, reduceItem, increaseItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
        <div className='arrow' onClick={() => reduceItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseItem(cartItem)}>
          &#10095;
        </div>
      </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(removeItem(item)),
    reduceItem: (item) => dispatch(reduceItem(item)),
    increaseItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
