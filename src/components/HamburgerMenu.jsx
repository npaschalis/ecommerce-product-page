import { useSelector, useDispatch } from 'react-redux';

import { toggleHamburgerMenu } from '../features/ui/uiSlice';
import iconClose from '../images/icon-close.svg';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const dispatch = useDispatch();

  const { isHamburgerMenuOpen } = useSelector(store => store.ui);
  return (
    <div className={isHamburgerMenuOpen ? 'hamburger-menu active' : 'hamburger-menu'}>
      <div
        className={
          isHamburgerMenuOpen ? 'hamburger-container active' : 'hamburger-container'
        }
      >
        <div className='hamburger-main-menu'>
          <img
            id='closeHamburgerMenu'
            src={iconClose}
            alt='close hamburger menu'
            onClick={() => dispatch(toggleHamburgerMenu())}
          />
          <ul>
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
      </div>
    </div>
  );
};

export default HamburgerMenu;
