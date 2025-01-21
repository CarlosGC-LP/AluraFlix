import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'; 

const FooterWrapper = styled.footer`
  background-color: #333333; 
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterLogo = styled.img`
  width: 150px; 
  height: auto;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo src={logo} alt="Logo de AluraFlix" />
    </FooterWrapper>
  );
};

export default Footer;