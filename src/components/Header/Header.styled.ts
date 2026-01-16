import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ServiceLink = styled.div`
  position: relative;
  cursor: pointer;
  color: #808080;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;

  &:hover,
  &.active {
    color: var(--purple-400);
  }
`;

export const ServicesToggleButton = styled.button`
  /* ✅ NEW: окрема кнопка для відкриття dropdown, щоб меню НЕ відкривалось “само” */
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
`;

export const ArrowDown = styled.img``;

export const DropdownMenu = styled.div`
  position: absolute;
  right: -112px;
  top: 30px;
  border-radius: 8px;
  padding: 10px 0;
  min-width: 250px;
  z-index: 1000;
  backdrop-filter: blur(168px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 186%
    ),
    rgb(0, 0, 0);
`;

export const DropdownItem = styled.div`
  padding: 8px 20px;
  transition: background-color 0.2s;

  &:hover {
    color: var(--purple-400);
  }

  a {
    /* ✅ Було #333, на чорному фоні це майже “невидимка” */
    color: var(--white-50);
    text-decoration: none;
    font-size: 14px;
    display: block;
  }
`;

export const NavbarContainer = styled.header<{ $isScrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(16px);
  padding: 1rem;
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

  @media screen and (min-width: 1440px) {
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
  padding: 0 2px;
`;

export const LangButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    width: auto;

    div {
      display: flex;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 24px;
    padding: 12px 20px;
    width: auto;
    height: 42px;
    backdrop-filter: blur(10px);
    box-shadow:
      0 8px 16px -8px rgba(0, 0, 0, 0.03),
      0 2px 4px -2px rgba(0, 0, 0, 0.08),
      inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
      inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.12) 7%,
        rgba(255, 255, 255, 0) 86%
      ),
      rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d1ff;
  text-decoration: none;
  z-index: 10;

  img {
    width: 142px;
    height: auto;
    overflow: hidden;

    &:hover,
    &:focus,
    &.active {
      color: #00ffe7;
      fill: #00ffe7;
    }
  }
`;

export const NavItem = styled.li`
  color: rgb(49, 46, 46);

  a {
    text-decoration: none;
    color: #ffffffff;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: var(--purple-400);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 500;

  /* ✅ Було font-size: 56px; через це header міг перекривати контент.
     Тепер розмір успадковується:
     - desktop: 14px (від NavItem a)
     - mobile overlay: 56px (від MenuLink) */
  font-size: inherit;
  line-height: inherit;

  color: #808080;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  position: relative;

  &:hover {
    color: var(--purple-400);
  }

  /* ❌ Було &::bevore (typo) і підкреслення не працювало */
  &::after {
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
    color: rgb(255, 255, 255);

    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;

export const StyledNavLinkDrop = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 500;

  /* ✅ теж успадкування */
  font-size: inherit;
  line-height: inherit;

  color: #808080;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  position: relative;

  &:hover {
    color: var(--purple-400);
  }

  /* ❌ Було &::bevore (typo) */
  &::after {
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
    color: rgb(255, 255, 255);

    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;
