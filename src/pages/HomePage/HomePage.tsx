import {
  HomeContainer,
  HomeTitel,
  HomeWrapperDetails,
  NavItem,
  StyledNavLink,
} from './HomePage.styled';
import React from 'react';

const Home: React.FC = () => {


  return (
    <>
      <HomeContainer>
        <HomeTitel>
          <HomeWrapperDetails>
          
            <NavItem>
              <StyledNavLink to="/work">WORK</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/photo">PHOTOGRAPHY</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/info">INFO</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/contact">CONTACTS</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/about">ABOUT ME</StyledNavLink>
            </NavItem>
          </HomeWrapperDetails>
        </HomeTitel>

      
      </HomeContainer>
    </>
  );
};

export default Home;
