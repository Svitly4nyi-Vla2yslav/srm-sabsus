import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.header<{ $isScrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
   background: rgb(0, 0, 0);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
 width: 100%;
  margin: 0 auto;
  transition: all 0.3s ease;
  z-index: 99;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 768px;
  }
    @media screen and (min-width: 1440px){
    width: 100%;
margin: 0 auto;
}

  &:hover,
  &:focus,
  &.active {
  
    transition: all 0.4s ease-in-out;
  }
`;

export const HeaderWrapper = styled.div`
      display: flex;
    width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

`;
export const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d1ff;
  text-decoration: none;
  
  img {
  height: 50px;
  overflov: hidden;

  }
  &:hover,
  &:focus,
  &.active {
    color: #00ffe7;
  }
`;



export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
color:rgb(49, 46, 46);
  a {
    text-decoration: none;
   color: #808080;
   font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
text-align: center;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color:rgb(255, 255, 255);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
text-align: center;
color: #fff;
  transition: all 0.4s ease-in-out;
  position: relative;

    color: #808080;
  cursor: pointer;

  transition: all 0.4s ease-in-out;
  position: relative;

  &:hover {
    color:rgb(255, 255, 255);
  }

  &::bevore {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #808080;
    transition: width 0.3s ease-in-out;
  }

  &.active {
   color:rgb(255, 255, 255);
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
    color:rgb(255, 255, 255);
  }
`;
