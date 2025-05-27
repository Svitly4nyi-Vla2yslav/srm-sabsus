import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HomeContainer = styled.div`
max-width: 100%;
    margin: 0 auto;
    height: 100vh;
    background: #000;
    display: flex
;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;

export const HomeWrapperDetails = styled.div`
 display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
     gap: 44px;
     width: 100%;
     margin: 0 auto;
`;

export const HomeTitel = styled.div`
display: flex;
width: 100%;
margin: 0 auto;

   
`;

export const SpanTitel = styled.span`

`;
export const NavItem = styled.li`
  display: flex;
  width: 100%;
  margin: 0 auto;
  transition: all 0.2s ease;

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    width: 100%;
    transition: all 0.2s ease;

    /* Стилі при ховері */
    &:hover {
      color: rgb(255, 255, 255);
    }

    /* Стилі при кліку (поки кнопка зажата) */
    &:active {
      background-color: rgb(255, 255, 255) !important;
      color: rgb(0, 0, 0) !important;
    }

    /* Стилі для активного стану (якщо сторінка активна) */
    &.active {
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`

  text-decoration: none;
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #fff;
  transition: all 0.4s ease-in-out;
  position: relative;
  padding-left: 0px; 
width: 100%;

  &::before {
    content: '▶'; 
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translateY(-50%) translateX(-10px); /* трохи зліва */
    color:rgb(255, 255, 255);
    opacity: 0;
    transition: all 0.4s ease-in-out;
    font-size: 20px;
  }



  &:hover::before {
    opacity: 1;
      color:rgb(255, 255, 255);
    transform: translateY(-50%) translateX(0);
  }

      &:active::before {
      background-color: rgb(255, 255, 255) !important;
      color: rgb(0, 0, 0) !important;
    }

  &.active::before {
background-color:rgb(255, 255, 255);
      color:rgb(0, 0, 0);
  }
 // !?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
@media screen and (min-width: 744px){

  text-decoration: none;
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #fff;
  transition: all 0.4s ease-in-out;
  position: relative;
  padding-left: 0px; 
width: 100%;

  &::before {
    content: '▶'; 
    position: absolute;
    left: 36%;
    
  }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
@media screen and (min-width: 1440px){


  &::before {
    content: '▶'; 
    position: absolute;
    left: 44%;
   
  }




`;
