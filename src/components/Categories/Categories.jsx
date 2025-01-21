import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../assets/delete.png';
import editIcon from '../../assets/edit.png';
import Modal from '../Modal/Modal';

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: #333333; 
  color: #fff;
  padding-bottom: 70px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: #9c27b0;
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  max-width: calc(33.33% - 1rem);
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 429.19px;
  height: 260.85px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null); 
  
    const openModal = (video) => {
      setSelectedVideo(video); 
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setSelectedVideo(null); 
    };
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const response = await fetch('http://localhost:3000/videos');
          const data = await response.json();
  
          const categorizedData = data.reduce((acc, video) => {
            if (!acc[video.categoria]) {
              acc[video.categoria] = [];
            }
            acc[video.categoria].push(video);
            return acc;
          }, {});
  
          setCategoriesData(categorizedData);
        } catch (error) {
          console.error('Error al obtener los videos:', error);
        }
      };
  
      fetchVideos();
    }, []);
  
    const handleDelete = async (videoId, category) => {
        try {
          const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            const updatedCategoryData = categoriesData[category].filter(video => video.id !== videoId);
      
            setCategoriesData({
              ...categoriesData,
              [category]: updatedCategoryData,
            });
            alert('Video eliminado exitosamente');
          } else {
            alert('Error al eliminar el video');
          }
        } catch (error) {
          console.error('Error al eliminar el video:', error);
          alert('Error al intentar eliminar el video');
        }
    };      

    return (
      <CategoriesWrapper>
        {Object.entries(categoriesData).map(([category, videos]) => (
          <Category key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <ImagesWrapper>
              {videos.map((video) => (
                <ImageContainer key={video.id}>
                  <Image src={video.imagen} alt={video.titulo} />
                  <IconWrapper>
                    <Icon
                        src={deleteIcon}
                        alt="Borrar"
                        onClick={() => handleDelete(video.id, category)} 
                    />
                    <Icon
                      src={editIcon}
                      alt="Editar"
                      onClick={() => openModal(video)}
                    />
                  </IconWrapper>
                </ImageContainer>
              ))}
            </ImagesWrapper>
          </Category>
        ))}
  
        {isModalOpen && (
          <Modal
            cardData={selectedVideo}
            onClose={closeModal}
          />
        )}
      </CategoriesWrapper>
    );
  };
  
  export default Categories;
  