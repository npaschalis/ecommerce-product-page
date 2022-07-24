import { useSelector, useDispatch } from 'react-redux/';

import { emptyCart } from '../features/cart/cartSlice';
import './CartModal.scss';

const CartModal = () => {
  const dispatch = useDispatch();

  const { quantity } = useSelector(store => store.cart);

  return (
    <div className='cart-modal'>
      <div className='cart-modal-container'>
        <div className='cart-modal-container-top'>
          <h4 className='cart-modal-title'>Cart</h4>
        </div>
        <div className='cart-modal-container-bottom'>
          {quantity === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className='cart-modal-item'>
              <div className='cmi-main-pic'>
                <img src={require('../images/image-product-1.jpg')} alt='sneakers' />
              </div>
              <div className='cart-modal-item-text'>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {quantity}
                  <span className='modal-item-price'>${(125 * quantity).toFixed(2)}</span>
                </p>
              </div>
              <i
                className='fa-solid fa-trash-can'
                onClick={() => dispatch(emptyCart())}
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
