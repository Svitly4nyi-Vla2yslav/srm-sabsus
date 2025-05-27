import styled from 'styled-components';

export const CollectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
max-width: 100%;

}
`;

export const PlayerVimeo = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #000;

  position: relative;
`;

export const VimeoVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.125%;
  overflow: hidden;
  background: #000;

  
  iframe {
  background: #000;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%; /* Компенсуємо зменшену висоту */
    transform: translateY(-25%); /* Центруємо */


  }

  video {
  background-size: cover;
    object-fit: cover;
  }
`;

export const VideoCaption = styled.div`
  color: #fff;
  text-align: center;
  padding: 0px 5%;
  padding-top: 20px;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;

  p {
    // margin: 10px 0;
    line-height: 1.5;
  }

  h3 {
    // margin: 20px 0;
    font-size: 1.5rem;
  }
`;

export const VimeoContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  background: #000;


  iframe {
  background: #000;

    position: absolute;
    top: -10%;
    left: 0;
    width: 100vw;
    height: 50vh;
    background-size: cover;
  }
`;

export const WorkTitelContainer = styled.div`
margin: 0 auto;
margin-top: 30px;
margin-bottom: 50px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const WorkTitel = styled.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 28px;
line-height: 162%;
color: #fff;
text-align: center;
@media screen and (min-width: 744px){
font-size: 48px;

}

@media screen and (min-width: 1440px){


}
`;

export const WorkFilterWrapp = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 25px;
    flex-direction: row;
    justify-content: center;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

import { css } from '@emotion/react';

 export const activeStyles = css`
  color: rgb(255, 247, 247);
  pointer-events: none;
  cursor: default;
`;


export const WorkTextFilter = styled.a`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 13px;
  line-height: 162%;
   color: #808080;
   pointer-events: none;
  cursor: default;

  transition: all 0.3s ease-in-out;
  position: relative;



  

  &.active {
     color: rgb(255, 247, 247);
  pointer-events: none;
    &::after {
      width: 100%;
    }
  }

 



  @media screen and (min-width: 744px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    // Можна додавати додаткові стилі для великих екранів
  }
`;



export const Folder = styled.h2`
text-transform: uppercase;
font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
text-align: center;
color: #fff;
`

export const CollectionWrapper = styled.div`
display: flex;
gap: 2rem;
flex-direction: column;
width: 50%;
margin-bottom: 3rem;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
width: 273px;

}
`;

export const CollectionText = styled.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 12px;
letter-spacing: -0.02em;
color: #808080;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
font-size: 16px;

}
`;

export const CollectionTitle = styled.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 20px;

}

@media screen and (min-width: 1440px){
font-size: 24px;

}
`;


export const CollectionDescription = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 14px;

}

@media screen and (min-width: 1440px){
font-size: 16px;

}

`;

export const CollectionHeader = styled.div`
display: flex;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    padding: 40px 16px 90px 16px;
    align-items: baseline;
  
 
@media screen and (min-width: 744px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;

}

@media screen and (min-width: 1440px){
display: flex;
        max-width: 1440px;
        margin: 0 auto;
        flex-direction: row;
        padding: 50px 16px 50px 16px;
        justify-content: space-between;
        align-items: flex-start;

}
`;

export const CollectionTextWrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 744px){
padding: 16px;

}

@media screen and (min-width: 1440px){

 max-width: 1440px;
  margin: 80px auto;
}
 
  `;

export const CollectionImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    // transform: scale(1.01);
  }

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const CollectionGrid = styled.div<{ $itemsCount?: number }>`
  display: grid;
  width: 100%;
 gap: 5px;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s;
    
    &:hover {
      // transform: scale(1.02);
    }
  }

  /* Мобільні пристрої - завжди 1 колонка */
  @media screen and (max-width: 743px) {
    grid-template-columns: 1fr;
  }

  /* Планшети - адаптивна кількість колонок */
  @media screen and (min-width: 744px) {
    grid-template-columns: ${({ $itemsCount }) => {
      if (!$itemsCount) return 'repeat(2, 1fr)';
      return $itemsCount >= 3 ? 'repeat(3, 1fr)' :
       `repeat(${$itemsCount}, 1fr)`;
    }};
  }

  /* Десктопи - адаптивна кількість колонок */
  @media screen and (min-width: 1440px) {
    grid-template-columns: ${({ $itemsCount }) => {
      if (!$itemsCount) return 'repeat(3, 1fr)';
      return $itemsCount >= 3 ? 'repeat(3, 1fr)' : `repeat(${$itemsCount}, 1fr)`;
    }};
  }
`;

export const CollectionImageWrapper = styled.div`
  display: grid;
  width: 100%;
  margin: 32px 0;
 gap: 5px;

  .image-container {
    position: relative;
    overflow: hidden;
    width: 100%;
   
    aspect-ratio: 2;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;
      
      &:hover {
        // transform: scale(1.03);
      }
    }
  }

  /* Мобільні пристрої */
  @media screen and (max-width: 743px) {
    grid-template-columns: 1fr;
    
    .image-container {
      aspect-ratio: 2;
    }
  }

  /* Планшети */
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
    
    .image-container:last-child:nth-child(odd) {
      grid-column: span 2;
      max-width: 50%;
      justify-self: center;
    }
  }

  /* Десктопи */
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);

    /* Спеціальне правило для двох останніх картинок */
    .image-container:nth-last-child(2),
    .image-container:last-child {
      grid-column: span 1; /* Залишаємо в одній колонці */
      width: 150%; /* Збільшуємо ширину на 50% */
      margin-left: 0%; /* Компенсуємо збільшення для вирівнювання */
      margin-right: -100%;
    }

    /* Вирівнювання для першої картинки в парі */
    .image-container:nth-last-child(2) {
      justify-self: start; /* Вирівнюємо праворуч */
    }

    /* Вирівнювання для другої картинки в парі */
    .image-container:last-child {
      justify-self: end; /* Вирівнюємо ліворуч */
    }

    /* Стиль для останньої картинки, якщо вона одна */
    .image-container:last-child:nth-child(3n+1) {
      grid-column: span 3;
      max-width: 33.33%;
      justify-self: end;
      margin: 0; /* Скидаємо відступи */
    }
  }
`; 

export const CollectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
.image-container {
width: 100%;
}

  @media screen and (min-width: 744px) {
    flex-direction: row;
    align-items: center;
    min-height: 50vh;
    .image-container {
      max-width: 744px;
      }
  }

  @media screen and (min-width: 1440px){
max-width: 1440px;
margin: 0 auto;
}
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
text-align: center;
color: #fff;

  h3 {
font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
text-align: center;
color: #fff;
  }



  @media screen and (min-width: 744px) {
  display: flex;
        width: 50%;
        // padding: 2rem;
        text-align: left;
        align-items: center;
        margin: 0 auto;
  }
`;

export const ImageBlock = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      // transform: scale(1.02);
    }
  }

  @media screen and (min-width: 744px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// !!!!!!!!!!!!!!
