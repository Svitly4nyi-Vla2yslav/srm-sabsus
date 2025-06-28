import styled from "styled-components";

export const WorkContainer = styled.div`

display: flex;
    flex-direction: column;
margin: 0 auto;
margin-top: 70px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


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
    gap: 8%;
    flex-direction: row;
    justify-content: center;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const WorkTextFilter = styled.a`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 13px;
  line-height: 162%;
   color: #808080;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    color:rgb(255, 255, 255);
  }

 

  

  &.active {
    color:rgb(255, 247, 247);
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
  }



  @media screen and (min-width: 744px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    // Можна додавати додаткові стилі для великих екранів
  }
`;



export const WorkItemContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
  
  @media screen and (min-width: 744px) {
    height: 270px;
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const PreviewLayer = styled.div<{ $isVisible: boolean; $imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${props => props.$isVisible ? 1 : 0};
  z-index: 1;
  will-change: opacity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    opacity: ${props => props.$isVisible ? 0 : 1};
    transition: opacity 0.6s ease-in-out;
    z-index: 1;
    pointer-events: none;
  }
`;

export const OriginalLayer = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${props => props.$isVisible ? 1 : 0};
  z-index: 0;
  will-change: opacity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoPreview = styled.div<{ $isVisible: boolean; $imageUrl: string }>`
  position: absolute;        // 👈 fixed — прив’язка до viewport
  top: 0;
  left: 0;
  width: 100vw;           // 👈 повна ширина екрана
  height: 100vh;          // 👈 повна висота екрана
  overflow: hidden;     /* 👈 або фіксована висота */
  z-index: 1000;     /* 👈 поверх усього */
  transition: opacity 0.3s ease-out;
  opacity: ${props => props.$isVisible ? 1 : 0};
  z-index: 0;
  will-change: opacity;
  background-color: #000;

  video {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${props => props.$isVisible ? '47%' : '100%'};
    background: ${props => props.$isVisible 
      ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%)' 
      : `url(${props.$imageUrl})`};
    background-size: cover;
    background-position: center;
    transition: all 0.6s ease-in-out;
    z-index: 1;
    pointer-events: none;
  }
`;

export const ImageDescription = styled.p<{ $isVisible: boolean }>`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.4s ease-out;
  z-index: 2;
  will-change: opacity;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  
  @media screen and (min-width: 744px) {
    font-size: 22px;
  }
`;

export const WorkPhotoWrapp = styled.div`
margin-bottom: 50px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;
export const WorkItem = styled.div`
height: 200px;
width: 100%;
@media screen and (min-width: 744px){
height: 270px
position: relative;

}

@media screen and (min-width: 1440px){
height: 400px;

}
`;

export const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;


// export const WorkSpannImage = styled.span<{ $imageUrl: string }>`
//   position: relative;
//   overflow: hidden;
//   display: inline-block;
//   width: 100%;
//   height: 100%;
//   transition: all 0.6s ease-in-out;
//   background-image: url(${props => props.$imageUrl});
//   background-size: cover;
//   background-position: center;
//   z-index: 0;

//   img {
  
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0; /* top: 0; left: 0; right: 0; bottom: 0; */
//     background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
//     opacity: 0;
//     transition: opacity 0.6s ease-in-out;
//     z-index: 1;
//   }😄

//   &:hover::after {
//     opacity: 1;
//   }

//   &:hover ${ImageDescription},
//   &.hover ${ImageDescription} {
//     opacity: 1;
//     z-index: 2;
//   }
// `;


export const PreviewImage = styled.div<{ $src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  z-index: 1;
`;

export const OriginalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  z-index: 0;
`;






export const WorkDescriptionWrapp = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
@media screen and (min-width: 744px){
height: 400px;

}

@media screen and (min-width: 1440px){


}
`;

export const WorkDescription = styled.h3`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
text-align: center;
color: #fff;

@media screen and (min-width: 744px){

font-size: 32px;
}

@media screen and (min-width: 1440px){


}
`;

export const WorkTextDescription = styled.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 12px;
text-align: center;
color: #808080;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){


}
`;

export const NotFoundWraperr = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
margin: 0 auto;
height: 420px;
// padding: 46px 280px;
height: 200px;
width: 100%;
@media screen and (min-width: 744px){
height: 400px;

}

@media screen and (min-width: 1440px){
// padding: 146px 880px;

}
`;

export const NotFoundText = styled.p`
font-family: var(--third-family);
font-weight: 600;
font-size: 24px;
color: #404040;
    text-align: center;
    line-height: 162%;
@media screen and (min-width: 744px){

font-size: 42px;
}

@media screen and (min-width: 1440px){
font-size: 64px;

}
`;
