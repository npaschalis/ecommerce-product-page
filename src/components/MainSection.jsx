import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/';

import { addItems } from '../features/cart/cartSlice';
import {
  toggleGalleryModal,
  toPrevImage,
  toNextImage,
  setActivePicture
} from '../features/ui/uiSlice';
import './MainSection.scss';

const MainSection = () => {
  const dispatch = useDispatch();

  const { activePicture } = useSelector(store => store.ui);

  const pictures = [1, 2, 3, 4];
  const [counter, setCounter] = useState(0);

  const addItemsToCart = () => {
    dispatch(addItems(counter));
    setCounter(1);
  };

  return (
    <div className='main-section'>
      <div className='main-section-container'>
        <div className='main-left'>
          <img
            src={require(`../images/image-product-${activePicture}.jpg`)}
            alt='sneakers'
            className='main-pic'
            onClick={() => dispatch(toggleGalleryModal())}
          />
          <div className='slide prev' onClick={() => dispatch(toPrevImage())}>
            <i className='fas fa-angle-left'></i>
          </div>
          <div className='slide next' onClick={() => dispatch(toNextImage())}>
            <i className='fas fa-angle-right'></i>
          </div>

          <div className='pictures-set'>
            {pictures.map(i => (
              <div
                className={
                  i === activePicture ? 'picture-set-item active' : 'picture-set-item'
                }
                key={i}
              >
                <img
                  src={require(`../images/image-product-${i}.jpg`)}
                  alt={`sneakers${i}`}
                  className='main-pic'
                  onClick={() => dispatch(setActivePicture(i))}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='main-right'>
          <h5>Sneaker Company</h5>
          <h2>Fall Limited Edition Sneakers</h2>
          <p className='description'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>

          <div className='price-div'>
            <div className='price-div-top'>
              <span className='price'>$125.00</span>
              <span className='discount'>50%</span>
            </div>
            <div className='price-div-bottom'>
              <span className='price-without-discount'>$250.00</span>
            </div>
          </div>

          <div className='buttons'>
            <div className='counter'>
              <i
                className='fa-solid fa-minus'
                onClick={() => counter > 0 && setCounter(counter - 1)}
              ></i>
              <span>{counter}</span>
              <i className='fa-solid fa-plus' onClick={() => setCounter(counter + 1)}></i>
            </div>
            <div className='add-to-cart'>
              <button onClick={addItemsToCart}>
                <i className='fa-solid fa-cart-shopping'></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
