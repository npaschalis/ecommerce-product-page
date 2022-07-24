import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHamburgerMenuOpen: false,
  isGalleryModalOpen: false,
  activePicture: 1
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleHamburgerMenu: state => {
      state.isHamburgerMenuOpen = !state.isHamburgerMenuOpen;
    },

    toggleGalleryModal: state => {
      state.isGalleryModalOpen = !state.isGalleryModalOpen;
    },

    toPrevImage: state => {
      if (state.activePicture === 1) {
        state.activePicture = 4;
      } else {
        state.activePicture -= 1;
      }
    },

    toNextImage: state => {
      if (state.activePicture === 4) {
        state.activePicture = 1;
      } else {
        state.activePicture += 1;
      }
    },

    setActivePicture: (state, action) => {
      state.activePicture = action.payload;
    }
  }
});

export const {
  toggleHamburgerMenu,
  toggleGalleryModal,
  toPrevImage,
  toNextImage,
  setActivePicture
} = uiSlice.actions;
export default uiSlice.reducer;
