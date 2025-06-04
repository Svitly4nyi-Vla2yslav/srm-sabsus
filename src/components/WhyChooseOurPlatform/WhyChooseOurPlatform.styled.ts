import { styled } from "styled-components";


export const GeneralContainer = styled.div`
padding: 0px 16px;
width: 375px;
margin: 0 auto;
margin-top: 50px;
`;

export const WhyText = styled.p`
display: flex;
align-items: center;
    justify-content: space-between;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
width: 179px;
height: 28px;
margin: 0 auto;
border-radius: 24px;
padding: 4px 4px 4px 8px;
width: 179px;
height: 28px;

backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
margin-bottom: 8px;
`;

export const PuzzleIcon = styled.img`
    border-radius: 25px;
    padding: 4px;
    width: 22px;
    height: 22px;
    font-size: 13px;
    box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08), 0 0px 20px rgba(464, 367, 391, 0.99);
    background: linear-gradient(315deg, rgba(245, 228, 253, 0.58) 7%, rgb(207 121 250) 86%) rgba(255, 255, 255, 0.03);

`;

export const MainTitel = styled.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
color: var(--white-100);
margin-bottom: 16px;
`;

export const MainText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;
`; 



