import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100vw;
  height: 60%;
  background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(1px); /* ефект blur */
  margin: 40px auto;
  padding: 150px auto;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
  }
`;

export const TextWraper = styled.div`
text-align: center;
margin: 0 2.5em;
color:  #6f42c1;
padding: 30px;
    width: 90%;
`;

export const TitelPartners = styled.h2`
color: white;
 font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 1.9rem;
    line-height: 1.1;
        width: 90%;
`;

export const TextPartners = styled.p`

 font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    font-size: 0.6rem;
    margin: 0 auto;
        color: #003755;
    height: 100%;
    padding-top: 52px;
    line-height: 1.45;
     width: 90%;
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
height: 100%;
width: 50;
object-fit: contain; 
`;