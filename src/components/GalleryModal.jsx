import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleGalleryModal } from '../features/ui/uiSlice';
import './GalleryModal.scss';

const GalleryModal = () => {
  const dispatch = useDispatch();

  const { activePicture } = useSelector(store => store.ui);

  const pictures = [1, 2, 3, 4];
  const [modalActivePicture, setModalActivePicture] = useState(activePicture);

  return (
    <div className='gallery-modal'>
      <div className='gallery-modal-container'>
        <div
          className='gallery-modal-close'
          onClick={() => dispatch(toggleGalleryModal())}
        >
          <i className='fa-solid fa-xmark fa-lg'></i>
        </div>
        <div className='gallery-modal-main-pic'>
          <img
            src={require(`../images/image-product-${modalActivePicture}.jpg`)}
            alt='sneakers'
          />
        </div>
        <div className='gallery-modal-pictures-group'>
          <div className='pictures-set'>
            {pictures.map(i => (
              <div
                className={
                  i === modalActivePicture
                    ? 'picture-set-item active'
                    : 'picture-set-item'
                }
                key={i}
              >
                <img
                  src={require(`../images/image-product-${i}.jpg`)}
                  alt={`sneakers${i}`}
                  className='main-pic'
                  onClick={() => setModalActivePicture(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
