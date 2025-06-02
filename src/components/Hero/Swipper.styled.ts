import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 97vw;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.83); /* півпрозорий фон */
  backdrop-filter: blur(1px); /* ефект blur */
    margin: 0px 0;
    padding: 40px 0px;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
     padding: 0px 0px;
     margin: 0 auto;
  }

      @media screen and (min-width: 744px){
width: 100vw;

}

@media screen and (min-width: 1440px){
gap: 50px;

}
`;



export const Border = styled.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(
      ellipse 118.85px 58.06px at 50% 50%,
      rgb(252, 252, 252) 0%,
      rgba(58, 55, 55, 0.42) 80%
    );
`;

export const ImageContainer = styled.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;

export const Image = styled.img`
height: 29px;
width: 100%;
object-fit: contain;
padding: 0 auto;
margin: 0 auto; 

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
height: 52px;

}
`;