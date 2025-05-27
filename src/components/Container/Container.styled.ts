import styled from '@emotion/styled';

export const Container = styled.main`
margin-left: 0;
margin-right: auto;
// padding: 0px 7px;
width: 320px;

@media screen and (min-width: 320px) {
  width: 100%;
}

@media screen and (min-width: 768px) {
  // padding: 0px 32px;
}

@media screen and (min-width: 1440px) {
  width: 1440px;
  // padding: 0px 128px;
}
`;