import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Left from"../../assets/icons/icon_left.svg"
import Right from"../../assets/icons/icon_right.svg"

const NavigationWrapper = styled.div`
  position: relative;
  bottom: 0px;
  max-width: 1440px;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  z-index: 100;
  margin: 0 auto;
`;

const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    color: rgba(98, 98, 98, 0.9);
   fill: rgba(98, 98, 98, 0.9);
  }
`;

export const ArrowImage = styled.img`
  width: 20px;  
  height: 33px;


  `;

const CollectionName = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  flex-grow: 1;
  padding: 0 20px;
`;

interface CollectionSliderProps {
  currentId: number;
  collectionIds: number[];
  collectionName: string;
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({ 
  currentId, 
  collectionIds,
  collectionName
}) => {
  const navigate = useNavigate();
  const currentIndex = collectionIds.findIndex(id => id === currentId);

  const navigateToCollection = (index: number) => {
    if (collectionIds.length === 0) return;
    const newIndex = (index + collectionIds.length) % collectionIds.length;
    navigate(`/collections/${collectionIds[newIndex]}`);
  };

  if (collectionIds.length <= 1) return null;

  return (
    <NavigationWrapper>
      <ArrowButton onClick={() => navigateToCollection(currentIndex - 1)}>
     <ArrowImage src={Left} alt="Left Arrow" />
      </ArrowButton>
      
      <CollectionName>{collectionName}</CollectionName>
      
      <ArrowButton onClick={() => navigateToCollection(currentIndex + 1)}>
      <ArrowImage src={Right} alt="Left Arrow" />
      </ArrowButton>
    </NavigationWrapper>
  );
};

export default CollectionSlider;