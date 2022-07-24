import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HamburgerMenu from './HamburgerMenu';
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import CartModal from './CartModal';
import { toggleHamburgerMenu } from '../features/ui/uiSlice';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { quantity } = useSelector(store => store.cart);

  return (
    <header>
      <div className='navigation'>
        <HamburgerMenu />
        <div className='navigation-left'>
          <i
            className='fa-solid fa-bars fa-lg hamburger'
            onClick={() => dispatch(toggleHamburgerMenu())}
          ></i>
          <img src={logo} alt="company's logo" />
          <ul className='big-screen-menu'>
            <li>
              <a href='/#'>Collections</a>
            </li>
            <li>
              <a href='/#'>Men</a>
            </li>
            <li>
              <a href='/#'>Women</a>
            </li>
            <li>
              <a href='/#'>About</a>
            </li>
            <li>
              <a href='/#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='navigation-right'>
          <div className='cart-div'>
            <div
              className='cart-navbar'
              onClick={() => setIsCartModalOpen(!isCartModalOpen)}
            >
              <img src={cart} alt='cart icon' className='cart-icon' />
              <span>{quantity}</span>
            </div>
          </div>
          <img src={avatar} alt="user's icon" className='avatar-icon' />
        </div>
        {isCartModalOpen && <CartModal />}
      </div>
    </header>
  );
};

export default Header;
