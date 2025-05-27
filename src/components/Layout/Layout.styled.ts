import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LayoutWrap = styled.div`
 min-width: 320px;
  max-width: 1440px;
  padding-top: 20px;
  margin: 0 auto;

`;

export const HeaderContainer = styled.header`

display: flex;
flex-wrap: wrap;
gap: 20px;
align-items: center;
justify-content: center;
margin-bottom: 30px;


@media screen and (min-width: 768px) {
  width: 81%;
  margin: 0 auto;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 0;
}
`;

export const LogoSvg = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLinkLogo = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryBlack};
  align-items: center;

  &:hover {
    scale: 1.1;
   color:  ${({ theme }) => theme.primaryYellow}
  }
`;

export const Line = styled.div`
// border-bottom : 1px solid #8080804f;
// padding-bottom: 24px;
`;