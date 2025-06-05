import { styled } from "styled-components";

export const AllinOneSRMContainer = styled.div`
margin-top: 150px;
    padding: 0px 16px;
    margin: 0 auto;
`
export const MainText = styled.p`
border-radius: 24px;
padding: 4px 4px 4px 14px;
width: auto;
height: 28px;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
margin-top: 50px;
backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
`;

export const MainTitle = styled.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
color: var(--white-100);
margin-bottom: 16px;
`;

export const MainTextDescription = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;
`;

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

export const Card = styled.div`
border: 1px solid #212121;
border-radius: 24px;
padding: 16px;
width: 343px;
height: 332px;
margin: 0 auto;
display: flex;
flex-direction: column;


backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: rgba(255, 255, 255, 0.03);
`;

export const CardTitle = styled.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 20px;
line-height: 130%;
color: var(--white-100);
margin-bottom: 8px;
`;

export const CardText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
color: var(--white-80);
margin-bottom: 20px;
`;

export const CardIcon = styled.img`
width: 303px;
height: 109px;
margin: 0 auto;
margin-bottom: 20px;
`;

export const CardButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px;
`;

export const CardButton = styled.p`
border-radius: 24px;
padding: 4px 4px 4px 8px;
width: auto;
gap: 8px;
display: flex;
height: 28px;
backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) ,rgba(255, 255, 255, 0.03), ;

`;

export const CardButtonText = styled.span`
 border-radius: 25px;
    padding: 2px;
    font-size: 13px;
    box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08), 0 0px 20px rgba(464, 367, 391, 0.99);
   background: linear-gradient(315deg, rgba(122, 121, 122, 0.58) 7%, rgb(172 172 172 / 22%) 86%) rgba(255, 255, 255, 0.03);
`;
