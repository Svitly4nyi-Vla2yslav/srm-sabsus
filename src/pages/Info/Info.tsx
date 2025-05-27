import React, { useEffect, useState } from 'react';
import {
  Border,
  InfoColumnContainer,
  InfoContainer,
  InfoItem,
  InfoLink,
  InfoName,
  InfoSmollName,
  InfoText,
  InfoTitle,
  ListInfo,
  UnderlinedText,
  WorkDescription,
  WorkDescriptionWrapp,
  WorkTextDescription,
  WrapperLink,
} from './Info.styled';

import { Quote } from '../Work/Work';
import { supabase } from '../../supabaseClient';

const Info: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const fetchQuotes = async () => {
    const { data, error } = await supabase.from('quotes').select('*');
    if (error) {
      console.error('Помилка при отриманні цитат:', error.message);
    } else {
      setQuotes(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchQuotes();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }
  }, [quotes]);
  return (
    <InfoContainer>
      <ListInfo>
        <InfoItem>
          <InfoText>Artist Name</InfoText>
          <InfoName>Pavlo Troph</InfoName>
        </InfoItem>
        <InfoItem>
          <InfoText>Specialization</InfoText>
          <InfoTitle>
            Graphic Design <br />
            CGI Photography <br />
            Cinematography
            <br /> Art Direction
          </InfoTitle>
        </InfoItem>{' '}
        <InfoItem>
          <InfoText>Location</InfoText>
          <InfoLink
            href="https://maps.app.goo.gl/b7UCDY41c7FuzzFC6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toronto, ON, CA
          </InfoLink>
        </InfoItem>{' '}
        <InfoItem>
          <InfoText>Contact</InfoText>
          <InfoLink href="mailto:info@pavlotroph.com">
            info@pavlotroph.com
          </InfoLink>
        </InfoItem>
      </ListInfo>
      <InfoColumnContainer>
        <InfoText>Info</InfoText>
        <InfoSmollName>
          Pavlo Troph
          <span>
            {' '}
            is a multidisciplinary artist dedicated to creating impactful and
            emotionally resonant experiences. By skillfully blending visuals,
            sound, and storytelling, he transforms ideas into memorable and
            engaging products.
          </span>{' '}
        </InfoSmollName>

        <InfoText>Companies</InfoText>

        <InfoSmollName>
          FiveMods
          <br /> Network <br />
          Graphics
          <br /> Meta Network
        </InfoSmollName>

        <InfoText>Software Skills</InfoText>
        <InfoSmollName>
          Blender 3D <br />
          Adobe Suite
          <br /> Figma
        </InfoSmollName>

        <InfoText>Links</InfoText>
        <WrapperLink>
          <UnderlinedText
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1D69U9qWZQzXH7Pu58QtCvbdFzv6qZgnV/view?usp=sharing"
          >
            Resume
          </UnderlinedText>
          <UnderlinedText
            href="https://www.youtube.com/watch?v=LUzVjS18PjI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Latest ShowReel
          </UnderlinedText>
        </WrapperLink>
      </InfoColumnContainer>

      <Border />

      {currentQuote && (
        <WorkDescriptionWrapp>
          <WorkDescription>{currentQuote.text}</WorkDescription>
          <WorkTextDescription>
            — {currentQuote.author}, <i>{currentQuote.source}</i>
          </WorkTextDescription>
        </WorkDescriptionWrapp>
      )}
    </InfoContainer>
  );
};

export default Info;
