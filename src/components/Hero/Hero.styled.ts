import styled from "styled-components";

export const HeroWrapper = styled.div`
margin-top: 100px;
margin-bottom: 100px;
`;

export const HeroInnovative = styled.p`
margin: 0 auto;
display: flex;
justify-content: space-around;
border-radius: 24px;
padding: 4px 4px 4px 8px;
width: 200px;
height: 28px;

backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);;
`;

export const SpanUnicorn = styled.span`
margin: 0 auto;
  border-radius: 48px;
  padding: 4px;
  width: 25px;
  height: 20px;

  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08),
    /** зовнішня тінь **/
    0 0px 20px rgba(199, 148, 244, 0.97); 

  background: linear-gradient(180deg, rgba(245, 228, 253, 0.58) 7%, rgba(185, 61, 247, 0.98) 86%) rgba(255, 255, 255, 0.03);
`;

export const HeroTitle = styled.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 86.41%, #6a82fc 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const HeroText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
`;

export const HeroContainerContent = styled.div`
width: 343px;
height: 99px;
`;

export const AvatarContainer = styled.div`
width: 343px;
height: 36px;
`;

export const ImageContainer = styled.div`
width: 100px;
height: 36px;
`;

export const ImageAvatar = styled.img`
border-radius: 18px;
border: 1px solid var(--black);
`;

export const ButtonContainer = styled.div`
width: 273px;
height: 43px;
`;

export const HeroButton = styled.button`
border-radius: 12px;
padding: 12px 20px;
width: 136px;
height: 43px;
`;

