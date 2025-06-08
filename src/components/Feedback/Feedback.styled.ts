import { styled } from "styled-components";


export const FeedbackContainer = styled.div`
    display: flex;
    padding: 0px 16px;
    width: 375px;
    height: 211px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

export const FeedbackTitle = styled.h2`
font-family: var(--font-family);
font-weight: 500;
font-size: 24px;
line-height: 130%;
text-align: center;
color: var(--white-100);

`;

export const StarContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-evenly;
    justify-items: column;
    flex-direction: row;
    gap: 4px;
    width: 343px;
    height: 117px;
    flex-wrap: wrap;
    align-content: space-between;
    // margin-bottom: 56px;
`;

export const Star = styled.img`
width: 104px;
height: 16px;

`;

export const RatingNumber = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 24px;
line-height: 130%;
text-align: center;
color: var(--white-100);
`;

export const RatingText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
color: var(--white-100);
`;

export const FeedbackSwiperContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 338px;
`;

export const FeedbackSlide = styled.div`
display: flex;
flex-direction: column;

border: 1px solid #212121;
border-radius: 24px;
padding: 20px;
width: 311px;
height: 317px;
backdrop-filter: blur(16px);
box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08), inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
background: rgba(255, 255, 255, 0.03);
`;

export const FeedbackSlideIcon = styled.img`
width: 100%;
height: 64px;
`;

export const FeedbackSlideText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--white-100);
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvatarWrapper = styled.div`

`;

export const AvatarIcon = styled.img`
border-radius: 24px;
width: 45px;
height: 45px;
`;

export const NameUser = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-100);
`;

export const Position = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-50);
`;

