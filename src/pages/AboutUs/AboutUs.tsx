import React from 'react';
import {
  AboutContainer,
  AboutDescription,
  AboutItem,
  AboutText,
  AboutTitle,
} from './AboutUs.styled';

const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutItem>
        <AboutText>Favorite Artists</AboutText>
        <AboutDescription>
          Ash Thorp<br/> Color Sponge <br/>Clayton Sjoerdsma <br/>Maciej Kuciara <br/>Toros Kose
          Greig Fraser<br/> Artur Gadzhiev Jama Jurabaev <br/>Maxim Zhestkov<br/> William
          Landgern<br/> Easton Chang
        </AboutDescription>
      </AboutItem>
      <AboutItem>
        <AboutText>Favorite Movies</AboutText>
        <AboutDescription>
          The Matrix Trilogy (Lilly Wachowski) TENET (Christopher
          Nolan) <br/>Oppenheimer (Christopher Nolan)<br/> The Dark Knight Trilogy
          (Christopher Nolan)<br/> Blade Runner (Ridley Scott)<br/> Blade Runner (Denis
          Villeneuve)<br/> Dune: Part One & Part Two (Denis Villeneuve)<br/> The
          Terminator (James Cameron)<br/> Star Wars: Original trilogy (George
          Lucas)<br/> Star Wars: Prequel trilogy (George Lucas)
        </AboutDescription>
      </AboutItem>
      <AboutItem>
        <AboutText>Favorite Books</AboutText>
        <AboutDescription>
          Mastery (Robert Greene)<br/> Eat That Frog! (Brian Tracy)<br/> The 7 Habits Of
          Highly Effective People (Stephen R. Covey)<br/> Atomic Habits (James
          Clear) <br/>The War of Art (Steven Pressfield)<br/> Crime and Punishment (Fyodor
          Dostoevsky)
        </AboutDescription>
      </AboutItem>
      <AboutItem>
        <AboutText>Favorite Music Albums</AboutText>
        <AboutDescription>
          Architects - For Those That Wish To Exist At Abbey Road (Abbey Road
          Version) 
          <br/>The Cinematic Orchestra - To Believe 
          <br/>Hammock - Far Cry Presents: We Will Rise Again (Original Game Soundtrack) 
          <br/>Novo Amor - Birthplace
          <br/>Novo Amor; Ed Tullett - Heiress
          <br/>Ludwig Goransson - Oppenheimer (Original Motion Picture Soundtrack)
          <br/>M83 - Hurry Up, We're Dreaming
          <br/>Mac Quayle - Mr. Robot, Vol. 5 (Original Television Series Soundtrack)
          <br/> Pilotpriest - The Beast 
          <br/>Slaughter To Prevail - Behelit
          <br/> Coldplay - Parachutes
          <br/> Avenged Sevenfold - Avenged Sevenfold (2007)
          <br/> Metallica - Metallica (Remastered)
        </AboutDescription>
      </AboutItem>
      <AboutItem>
        <AboutText>Languages</AboutText>
        <AboutDescription>Ukrainian<br/> English<br/> French</AboutDescription>
      </AboutItem>
    </AboutContainer>
  );
};

export default AboutUs;
