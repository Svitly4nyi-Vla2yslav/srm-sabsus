import React from 'react';
import { motion } from 'framer-motion';
import {
  ResultCard,
  ResultCard1,
  ResultCard2,
  ResultDisplayGrid,
  ResultIconCard,
  ResultImage,
  ResultImage1,
  ResultImage2,
  ResultImage3,
  ResultImage4,
  ResultMainText,
  ResultMainTextDescription,
  ResultMainTitle,
  ResultMasterImage,
  ResultsFromBusinessesWrapper,
  ResultText,
  ResultTitle,
  ResultTitleWrapper,
} from './ResultsFromBusinesses.styled';
import { CardButtonText } from '../AllinOneSRM/AllinOneSRM.styled';
import icon18 from '../../assets/icons/cards4/Chart Increasing.svg';
import IconPazzario from '../../assets/icons/pizzario/pizzario.png';
import Image1 from '../../assets/icons/pizzario/image1(2).png';
import Image2 from '../../assets/icons/pizzario/image2(10).png';
import Image3 from '../../assets/icons/pizzario/image3().png';
import Image4 from '../../assets/icons/pizzario/image4.png';
import Iphone from '../../assets/icons/pizzario/iPhone16ProMax.png';
import burban from '../../assets/icons/pizzario/burbanBites.png';
import image5 from '../../assets/icons/pizzario/image5.png';
import sweets from '../../assets/icons/pizzario/sweetTreats.png';
import { useTranslation } from 'react-i18next';

const ResultsFromBusinesses: React.FC = () => {
  const { t } = useTranslation();
  const data = t('results', { returnObjects: true }) as {
    mainText: string;
    mainTitle: string;
    description: string;
    cards: Array<{
      title: string;
      text: string;
    }>;
  };

  // Анімації для кожного елементу
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const cardAnimation = (index: number) => {
    switch(index) {
      case 0: return { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 1: return { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 2: return { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      default: return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  return (
    <ResultsFromBusinessesWrapper>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainText>
          {data.mainText} <CardButtonText src={icon18} alt="💹" />
        </ResultMainText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainTitle>{data.mainTitle}</ResultMainTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainTextDescription>{data.description}</ResultMainTextDescription>
      </motion.div>

      <ResultDisplayGrid
        as={motion.div}
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMasterImage 
          as={motion.img}
          src={Iphone} 
          alt="Main Image"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        
        <ResultCard 
          as={motion.div}
          {...cardAnimation(0)}
          transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={itemAnimation}>
            <ResultIconCard src={IconPazzario} alt="Icon" />
          </motion.div>
          <motion.div variants={itemAnimation}>
            <ResultTitleWrapper>
              <ResultTitle>{data.cards[0].title}</ResultTitle>
              <ResultText>{data.cards[0].text}</ResultText>
            </ResultTitleWrapper>
          </motion.div>
        </ResultCard>
        
        <ResultImage 
          as={motion.img}
          src={Image1} 
          alt="Image 1"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
         viewport={{ once: false, amount: 0.3 }}
        />
        
        <ResultImage4 
          as={motion.img}
          src={image5} 
          alt="Image 5"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
       viewport={{ once: false, amount: 0.3 }}
        />
        
        <ResultCard2
          as={motion.div}
          {...cardAnimation(1)}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={itemAnimation}>
            <ResultIconCard src={sweets} alt="Icon" />
          </motion.div>
          <motion.div variants={itemAnimation}>
            <ResultTitleWrapper>
              <ResultTitle>{data.cards[2].title}</ResultTitle>
              <ResultText>{data.cards[2].text}</ResultText>
            </ResultTitleWrapper>
          </motion.div>
        </ResultCard2>
        
        <ResultImage1 
          as={motion.img}
          src={Image2} 
          alt="Image 2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        
        <ResultCard1
          as={motion.div}
          {...cardAnimation(2)}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={itemAnimation}>
            <ResultIconCard src={burban} alt="Icon" />
          </motion.div>
          <motion.div variants={itemAnimation}>
            <ResultTitleWrapper>
              <ResultTitle>{data.cards[1].title}</ResultTitle>
              <ResultText>{data.cards[1].text}</ResultText>
            </ResultTitleWrapper>
          </motion.div>
        </ResultCard1>
        
        <ResultImage3 
          as={motion.img}
          src={Image4} 
          alt="Image 4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
        />
        
        <ResultImage2 
          as={motion.img}
          src={Image3} 
          alt="Image 3"
          initial={{ rotate: 10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </ResultDisplayGrid>
    </ResultsFromBusinessesWrapper>
  );
};

export default ResultsFromBusinesses;