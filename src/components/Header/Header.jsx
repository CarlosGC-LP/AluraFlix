import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333333;
  color: #fff;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? '#9c27b0' : '#fff')};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #9c27b0;
  }
`;

const Header = ({ onNavChange }) => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo src={logo} alt="AluraFlix Logo" />
      </LogoContainer>
    <Nav>
      <NavLink onClick={() => onNavChange('home')}>Inicio</NavLink>
      <NavLink onClick={() => onNavChange('nuevoVideo')}>Nuevo Video</NavLink>
    </Nav>
    </HeaderWrapper>
  );
};

export default Header;