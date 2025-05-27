import styled from "styled-components";


export const InfoContainer = styled.div`
margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 32px;
display: flex;
flex-direction: column;
margin-bottom: 0%;

@media screen and (min-width: 744px){
margin-bottom: 0%;

}

@media screen and (min-width: 1440px){

margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 0px;
display: flex;
flex-direction: column;
margin-bottom: 0px;
}

`;

export const InfoItem = styled.div`
display: flex;
gap: 10px;
  flex-direction: column;
 @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 25vh;

}
`
;

export const ListInfo = styled.div`
display: flex;
flex-direction: column;
gap: 50px;

@media screen and (min-width: 744px){

display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
margin-bottom: 150px;
}

@media screen and (min-width: 1440px){
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
margin-bottom: 50px;

}

`;

export const InfoText = styled.p`
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
export const InfoName = styled.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 24px;
line-height: 162%;
color: #fff;

`;

export const InfoTitle = styled.h3`
font-family: var(--font-family);
font-weight: 600;
font-size: 12px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 14px;

}

@media screen and (min-width: 1440px){
font-family: var(--font-family);
font-weight: 600;
font-size: 16px;
line-height: 162%;
color: #fff;

}
`;


export const InfoDescription = styled.p`
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

export const InfoLink = styled.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 12px;
line-height: 162%;
color: #fff;

@media screen and (min-width: 744px){

margin-bottom: 30px;
}

@media screen and (min-width: 1440px){
font-size: 16px;
margin-bottom: 0px;

}

`;

export const EmailSocialLink = styled.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;

export const InfoColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
margin-bottom: 10%;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
    width: 100%;
    height: 100%;
margin-bottom: 5%;

}
`;


export const Border = styled.p`
  padding: 0px auto 0px auto;
  width: 100%;
border: 1px solid #d9d9d9;
  margin: 0 auto;
background: #d9d9d9;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
max-width: 1440px;

}
`; 


export const WrapperLink = styled.div`
display: flex;
flex-direction: column;
`;

export const InfoSmollName = styled.p`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 162%;
color: #fff;

span {
font-weight: 400;
color: #bfbfbf;
}
`;



export const UnderlinedText = styled.a`

font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 162%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #fff;
`;

export const WorkDescriptionWrapp = styled.div`
    display: flex;
    height: 100px;
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
height: 200px;

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