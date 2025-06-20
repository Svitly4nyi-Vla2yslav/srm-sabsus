import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100vw;
//   height: 80%;
  background-color: rgba(0, 0, 0, 0); /* півпрозорий фон */
  backdrop-filter: blur(1px); /* ефект blur */
    // margin: 10px 0;
    padding: 60px 0px;
  overflow: visible;
z-index: 6;
img{


@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
    
    }

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
     padding: 0px 0px;
     margin: 0px auto;
  }

      @media screen and (min-width: 744px){
width: 100vw;

}

@media screen and (min-width: 1440px){
gap: 0px;

}
`;

export const LinkContainer = styled.a`
border: 0.61px solid #212121;
border-radius: 29px;
width: 132px;
height: 62px;

backdrop-filter: blur(9.684210777282715px);
box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.08), inset 0 -5px 15px 0 rgba(255, 255, 255, 0.03), inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
background: rgba(255, 255, 255, 0.03);

@media screen and (min-width: 768px) {
  border: 1px solid #212121;
border-radius: 48px;
padding: 20px 48px;
width: 219px;
height: 104px;
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;


export const PartnersIcon = styled.img`
  margin: 5px 0;
  border: 0.61px solid #212121;
  border-radius: 29px;
  padding: 10px 29px;
  width: 132px;
  height: 62px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  backdrop-filter: blur(9.684210777282715px);
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.03),
              0 1px 2px -1px rgba(0, 0, 0, 0.08),
              inset 0 -5px 15px 0 rgba(255, 255, 255, 0.03),
              inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
    z-index: 12;
position: relative;
  &:hover {
    box-shadow: 0 0 5px 4px #494BEC, 0 0 5px 0px #4F51ED, inset 0 0 16px 8px #6567EF;
    background: rgba(255, 255, 255, 0.06);
    border-color: white;

  }

  &:active {
    transform: translateY(-2px);
  }

   @media screen and (min-width: 768px) {
  border: 1px solid #212121;
border-radius: 48px;
width: 219px;
height: 104px;
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const ImageContainer = styled.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 768px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;

export const IconPartners = styled.div`
margin: 0 auto;
margin-top: 32px;
display: flex;
justify-content: center;

@media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const AvatarIcon = styled.img`
    border-radius: 100%;
    stroke-width: 1px;
    stroke: #212121;
    margin-left: 0px;
    margin-right: -15px;
  
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const UserText = styled.p`
display: flex;
    border: 1px solid #212121;
    border-radius: 48px;
    padding: 4px 8px;
    width: 291px;
    height: 36px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    color: var(--white-100);
    backdrop-filter: blur(16px);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08), inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
    background: rgba(255, 255, 255, 0.03);
    align-items: center;
    justify-content: center;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

