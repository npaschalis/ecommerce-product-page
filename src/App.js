import { useSelector } from 'react-redux';

import GalleryModal from './components/GalleryModal';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  const { isGalleryModalOpen } = useSelector(store => store.ui);

  return (
    <div className='App'>
      <Header />
      <MainSection />
      {isGalleryModalOpen && <GalleryModal />}
    </div>
  );
}

export default App;
