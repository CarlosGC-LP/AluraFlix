import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../assets/banner.png'; 

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  z-index: 2; 
`;

const Description = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #9c27b0;
`;

const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <ContentWrapper>
        <Description>
          <Title>Video Destacado</Title>
          <Text>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos 
            adquiridos en la formación React.
          </Text>
        </Description>
        <ImageContainer>
          <Image src={bannerImage} alt="Video Destacado" />
        </ImageContainer>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default Banner;