import { styled } from "styled-components";


export const GeneralContainer = styled.div`
 width: 100%;
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
height: 28px;
margin: 0 auto;
border-radius: 24px;
    padding: 4px 1px 4px 14px;
    width: max-content;
height: 28px;

backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
margin-bottom: 8px;
`;

export const PuzzleIcon = styled.img`
  border-radius: 25px;
  padding: 0px;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  font-size: 13px;

  box-shadow: 
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);

  background: linear-gradient(
    315deg,
    rgba(176, 253, 161, 0.68) 7%,
    rgb(142, 250, 121) 86%
  );

  -webkit-transform: translateZ(0);
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



