import React from 'react';
import {
  AllinOneSRMContainer,
  Card,
  CardButton,
  CardButtonContainer,
  CardButtonText,
  CardContainer,
  CardIcon,
  CardText,
  CardTitle,
  MainText,
  MainTextDescription,
  MainTitle,
} from './AllinOneSRM.styled';
import card1 from '../../assets/icons/cards/card-1.svg';

const AllinOneSRM: React.FC = () => {
  return (
    <AllinOneSRMContainer>
      <MainText>
        All-in-one CRM, POS & APP platform
        <CardButtonText>💻</CardButtonText>{' '}
      </MainText>
      <MainTitle>
        Everything your store, café, or delivery business needs — in one
        ecosystem
      </MainTitle>
      <MainTextDescription>
        Our platform connects orders, payments, inventory, staff, loyalty, and
        marketing in one place. No extra integrations, just growth.
      </MainTextDescription>
      <CardContainer>
        <Card>
          <CardTitle>Customer Experience Suite</CardTitle>
          <CardText>
            Mobile app, CRM, loyalty & user comfort in one place.
          </CardText>
          <CardIcon src={card1} alt="Customer Experience Suite" />
          <CardButtonContainer>
            <CardButton>
              Mobile app
              <CardButtonText>📱</CardButtonText>
            </CardButton>
            <CardButton>
              Delivery
              <CardButtonText>🚚</CardButtonText>
            </CardButton>
            <CardButton>
              Loyalty
              <CardButtonText>🎁</CardButtonText>
            </CardButton>
            <CardButton>
              CRM
              <CardButtonText>💼</CardButtonText>
            </CardButton>
            <CardButton>
              UX
              <CardButtonText>🌠</CardButtonText>
            </CardButton>
          </CardButtonContainer>
        </Card>
      </CardContainer>
    </AllinOneSRMContainer>
  );
};

export default AllinOneSRM;
