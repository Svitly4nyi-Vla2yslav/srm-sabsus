import React from 'react';
import {
  FeedbackContainer,
  FeedbackTitle,
  RatingNumber,
  StarContainer,
  Star,
  RatingText,
} from './Feedback.styled';
import star from "../../assets/icons/star.svg"

const feedback = [
  {
    id: 1,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
  {
    id: 2,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
  {
    id: 3,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
  {
    id: 4,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
  {
    id: 5,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
  {
    id: 6,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
  {
    id: 7,
    icon: '2M+',
    text: '#',
    avatar: 'users daily',
    name: '',
    position: '',
  },
];
const Feedback: React.FC = () => {
  return (
    <div>
      <FeedbackContainer>
        <FeedbackTitle>
          Trusted by 2000+ award-winning agencies and firms
        </FeedbackTitle>
        <StarContainer>
          <div>
            <RatingNumber>4,8</RatingNumber>
            <div>
              <Star src={star}  alt='⭐⭐⭐⭐⭐'/>
              <RatingText>TechRadar CRM</RatingText>
            </div>
          </div>
          <div>
            <RatingNumber>5,0</RatingNumber>
            <div>
            <Star src={star}  alt='⭐⭐⭐⭐⭐'/>
              <RatingText>ChroStartupTools</RatingText>
            </div>
          </div>
          <div>
            <RatingNumber>4,9</RatingNumber>
            <div>
              <Star src={star}  alt='⭐⭐⭐⭐⭐'/>
              <RatingText>SaaS Advisor</RatingText>
            </div>
          </div>
        </StarContainer>
      </FeedbackContainer>
    </div>
  );
};

export default Feedback;
