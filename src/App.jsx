import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState('Inicio');

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos');
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleEdit = (card) => {
    setSelectedCard(card);
  };

  const handleUpdate = () => {
    fetchVideos();
  };

  const onNavChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header onNavChange={onNavChange} currentPage={currentPage} />
      <Banner />
      <Categories videos={videos} onEdit={handleEdit} />
      <Footer />
      {selectedCard && (
        <Modal
          cardData={selectedCard}
          onClose={() => setSelectedCard(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default App;