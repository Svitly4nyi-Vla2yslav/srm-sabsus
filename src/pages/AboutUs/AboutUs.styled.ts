import { styled } from "styled-components";


export const AboutContainer = styled.div`
margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 32px;
display: flex;
flex-direction: column;
margin-bottom: 10%;

@media screen and (min-width: 744px){
margin-bottom: 10%;

}

@media screen and (min-width: 1440px){

margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 0px;
display: flex;
flex-direction: column;
margin-bottom: 100px;
}
  `;

  export const AboutTitle = styled.h1`

font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
line-height: 162%;
color: #fff;
    `;


export const AboutItem = styled.div`
display: flex;    
flex-direction: column;
gap: 10px;
align-items: flex-start;
margin-top: 30px;
`;


export const AboutText = styled.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 16px;
letter-spacing: -0.02em;
color: #808080;
padding: 10px 0;
`;

export const AboutDescription = styled.p`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 162%;
color: #fff;
`;

