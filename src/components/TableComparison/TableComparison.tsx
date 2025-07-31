import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

// Стилізовані компоненти
const ComparisonContainer = styled(motion.div)`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 auto;
  overflow: hidden;
  position: relative;
`;

const ComparisonTitle = styled(motion.h2)`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  background: linear-gradient(90deg, #494bec 0%, #6567ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 40px;

  @media (max-width: 767px) {
    width: 100%;
    min-width: 320px;
  }

  @media (min-width: 768px) {
    border-radius: 16px;
  }

  @media (min-width: 1024px) {
    border-radius: 20px;
  }
  @media (min-width: 1284px) {
  padding-top: 0px;
  }
`;

const StyledTable = styled(motion.table)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  @media (max-width: 767px) {
    min-width: 320px;
  }

  @media (min-width: 768px) {
    min-width: 600px;
  }

  @media (min-width: 1024px) {
    min-width: 800px;
  }
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled(motion.tr)`
  &:nth-child(even) {
    background: rgba(97, 143, 243, 0.02);
  }

  &:hover {
    background: rgba(73, 76, 236, 0.85);
  }
`;

const TableHeaderCell = styled(motion.th)`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #ffffff;
  position: sticky;
  top: 0;
  background: rgba(25, 25, 35, 0.9);
  backdrop-filter: blur(10px);
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(73, 76, 236, 0.85) !important;
  }
  
  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const TableCell = styled(motion.td)`
  padding: 1rem;
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  transition: all 0.3s ease;

  &:first-child {
    font-weight: 500;
    color: #ffffff;
    white-space: nowrap;
  }
`;

const SabsusCell = styled(TableCell)`
  background: rgba(73, 75, 236, 0.1);
  position: relative;
  color: #ffffff;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-left: 3px solid #494bec;
    pointer-events: none;
  }
`;

// const HighlightText = styled.span`
//   color: #494bec;
//   font-weight: 600;
// `;

const SavingsRow = styled(TableRow)`
  background: rgba(25, 25, 35, 0.7) !important;
  font-weight: 600;

  td {
    color: #ffffff;
    font-weight: 600;
  }
`;

const AnnualCostRow = styled(TableRow)`
  background: linear-gradient(
    90deg,
    rgba(73, 75, 236, 0.2) 0%,
    rgba(101, 103, 239, 0.1) 100%
  ) !important;

  td {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

const CompetitorCell = styled(TableCell)`
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    min-width: 80px;
    font-size: 12px;
    padding: 8px 10px;

    &:nth-child(3) {
      background: rgba(73, 75, 236, 0.05);
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    min-width: 100px;
    font-size: 14px;
    padding: 10px 12px;
  }

  @media (min-width: 1024px) {
    min-width: 120px;
    font-size: 15px;
    padding: 12px 14px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const FixedFunctionHeaderCell = styled(TableHeaderCell)`
  position: sticky;
  left: 0;
  z-index: 20;
  background: rgba(25, 25, 35, 0.95) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 767px) {
    width: 120px;
    min-width: 120px;
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (min-width: 768px) {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    font-size: 15px;
    padding: 10px 14px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    padding: 12px 16px;
  }
`;

const FixedSabsusHeaderCell = styled(TableHeaderCell)`
  position: sticky;
  z-index: 20;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(10, 10, 30, 0.5);
  border: 2px solid transparent;
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2px;
    background: linear-gradient(
      135deg,
      white 0%,
      #6567ef 30%,
      #4f51ed 50%,
      #e4e5fc 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: -1;
  }

  box-shadow:
    0 0 15px 5px rgba(101, 103, 239, 0.2),
    0 0 30px 10px rgba(101, 103, 239, 0.15),
    inset 0 0 20px 5px rgba(101, 103, 239, 0.3);

  @media (max-width: 767px) {
    left: 120px;
    width: 100px;
    min-width: 100px;
    font-size: 14px;
    padding: 8px 10px;
  }

  @media (min-width: 768px) {
    left: 300px;
    width: 100px;
    min-width: 100px;
    font-size: 15px;
    padding: 10px 12px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    padding: 12px 14px;
  }
`;

const FixedFunctionCell = styled(TableCell)`
  position: sticky;
  left: 0;
  z-index: 10;
  background: rgba(15, 15, 25, 0.95);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    width: 120px;
    min-width: 120px;
    max-width: 120px;
    font-size: 12px;
    padding: 8px 12px;
  }

  @media (min-width: 768px) {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    font-size: 14px;
    padding: 10px 14px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    padding: 12px 16px;
  }
`;

const FixedSabsusCell = styled(SabsusCell)`
  position: sticky;
  z-index: 10;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(10, 10, 30, 0.5);
  border: 2px solid transparent;
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2px;
    background: linear-gradient(
      135deg,
      white 0%,
      #6567ef 30%,
      #4f51ed 50%,
      #e4e5fc 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: -1;
  }

  box-shadow:
    0 0 15px 5px rgba(101, 103, 239, 0.2),
    0 0 30px 10px rgba(101, 103, 239, 0.15),
    inset 0 0 20px 5px rgba(101, 103, 239, 0.3);
    
  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 0 25px 10px rgba(101, 103, 239, 0.3),
      0 0 40px 15px rgba(101, 103, 239, 0.25),
      inset 0 0 25px 8px rgba(101, 103, 239, 0.4);
    background: rgba(10, 10, 30, 0.6);
  }

  @media (max-width: 767px) {
    left: 120px;
    width: 100px;
    min-width: 100px;
    font-size: 12px;
    padding: 8px 10px;
  }

  @media (min-width: 768px) {
    left: 300px;
    width: 150px;
    min-width: 150px;
    font-size: 14px;
    padding: 10px 12px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    padding: 12px 14px;
  }
`;

const AnimatedArrows = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    gap: 6px;
  }
`;

const ArrowDown = styled(motion.div)`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #6567ef;
  filter: drop-shadow(0 0 4px rgba(101, 103, 239, 0.7));
`;

const AutoScrollController = styled.div`
  position: fixed;
  top: 0px;
  right: -140px;
  display: flex;
  gap: 10px;
  z-index: 1000;
  background: rgba(25, 25, 35, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    right: 100px;
  }
`;

const ScrollButton = styled.button`
  background: rgba(73, 75, 236, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(73, 75, 236, 0.6);
    transform: scale(1.1);
  }
`;

// Анімація для стрілок
const arrowsVariants = {
  animate: {
    y: [0, 5, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'  as const,
    },
  },
};

// Анімації
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const cellVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

type Feature = {
  name: string;
  sabsus: string;
  toast: string;
  square: string;
  clover: string;
  otter: string;
  skytab: string;
};

type Costs = {
  sabsus: string;
  toast: string;
  square: string;
  clover: string;
  otter: string;
  skytab: string;
};

type Savings = {
  toast: string;
  square: string;
  clover: string;
  otter: string;
  skytab: string;
};

const ComparisonTable: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !tableWrapperRef.current || !tableRef.current) return;

    const tableWrapper = tableWrapperRef.current;
    let animationFrameId: number;
    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    let scrollDirection = 1;

    const autoScroll = () => {
      if (!isAutoScrollEnabled) return;

      const maxScroll =
        tableRef.current!.scrollWidth - tableWrapper.clientWidth;

      if (scrollAmount >= maxScroll) {
        scrollDirection = -1;
        scrollAmount = maxScroll;
      } else if (scrollAmount <= 0) {
        scrollDirection = 1;
        scrollAmount = 0;
      }

      scrollAmount += scrollSpeed * scrollDirection;
      tableWrapper.scrollLeft = scrollAmount;

      if (isScrolling && isAutoScrollEnabled) {
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    const handleMouseEnter = () => {
      setIsScrolling(false);
    };

    const handleMouseLeave = () => {
      if (isAutoScrollEnabled) {
        setIsScrolling(true);
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    const timeoutId = setTimeout(() => {
      if (isAutoScrollEnabled) {
        setIsScrolling(true);
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    }, 3000);

    tableWrapper.addEventListener('mouseenter', handleMouseEnter);
    tableWrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      tableWrapper.removeEventListener('mouseenter', handleMouseEnter);
      tableWrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, inView, isAutoScrollEnabled]);

  const toggleAutoScroll = () => {
    setIsAutoScrollEnabled(!isAutoScrollEnabled);
  };

  const scrollToStart = () => {
    if (tableWrapperRef.current) {
      tableWrapperRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToEnd = () => {
    if (tableWrapperRef.current && tableRef.current) {
      tableWrapperRef.current.scrollTo({
        left: tableRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  // Отримуємо дані для таблиці з перекладів

   const featuresData = t('comparisonTable.features', { returnObjects: true }) as Feature[];
  const costsData = t('comparisonTable.costs', { returnObjects: true }) as Costs;
  const savingsData = t('comparisonTable.savings', { returnObjects: true }) as Savings;

  return (
     <ComparisonContainer
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <ComparisonTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        dangerouslySetInnerHTML={{
          __html: t('comparisonTable.title', {
            highlight: (chunks) => `<span class="highlight">${chunks}</span>`
          })
        }}
      />

      <TableWrapper ref={tableWrapperRef}>
        {isMobile && (
          <AutoScrollController>
            <ScrollButton onClick={scrollToStart} title={t('comparisonTable.controls.start')}>
              ⇤
            </ScrollButton>
            <ScrollButton
              onClick={toggleAutoScroll}
              title={t('comparisonTable.controls.toggleAutoScroll')}
              style={{
                background: isAutoScrollEnabled
                  ? 'rgba(73, 75, 236, 0.6)'
                  : 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {isAutoScrollEnabled ? '⏸' : '▶'}
            </ScrollButton>
            <ScrollButton onClick={scrollToEnd} title={t('comparisonTable.controls.end')}>
              ⇥
            </ScrollButton>
          </AutoScrollController>
        )}

        <StyledTable ref={tableRef}>
          <TableHeader>
            <TableRow variants={rowVariants}>
              <FixedFunctionHeaderCell>
                {t('comparisonTable.headers.feature')}
              </FixedFunctionHeaderCell>
              <FixedSabsusHeaderCell>
                <AnimatedArrows variants={arrowsVariants} animate="animate">
                  <ArrowDown /> {t('comparisonTable.headers.sabsus')}
                  <ArrowDown />
                </AnimatedArrows>
              </FixedSabsusHeaderCell>
              <TableHeaderCell>{t('comparisonTable.headers.toast')}</TableHeaderCell>
              <TableHeaderCell>{t('comparisonTable.headers.square')}</TableHeaderCell>
              <TableHeaderCell>{t('comparisonTable.headers.clover')}</TableHeaderCell>
              <TableHeaderCell>{t('comparisonTable.headers.otter')}</TableHeaderCell>
              <TableHeaderCell>{t('comparisonTable.headers.skytab')}</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {featuresData.map((feature, index) => (
              <TableRow key={index} variants={rowVariants}>
                <FixedFunctionCell variants={cellVariants}>
                  {feature.name}
                </FixedFunctionCell>
                <FixedSabsusCell variants={cellVariants}>
                  {feature.sabsus}
                </FixedSabsusCell>
                <CompetitorCell variants={cellVariants}>
                  {feature.toast}
                </CompetitorCell>
                <CompetitorCell variants={cellVariants}>
                  {feature.square}
                </CompetitorCell>
                <CompetitorCell variants={cellVariants}>
                  {feature.clover}
                </CompetitorCell>
                <CompetitorCell variants={cellVariants}>
                  {feature.otter}
                </CompetitorCell>
                <CompetitorCell variants={cellVariants}>
                  {feature.skytab}
                </CompetitorCell>
              </TableRow>
            ))}

            <AnnualCostRow variants={rowVariants}>
              <FixedFunctionCell variants={cellVariants}>
                {t('comparisonTable.rows.annualCost')}
              </FixedFunctionCell>
              <FixedSabsusCell variants={cellVariants}>
                {costsData.sabsus}
              </FixedSabsusCell>
              <CompetitorCell variants={cellVariants}>
                {costsData.toast}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {costsData.square}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {costsData.clover}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {costsData.otter}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {costsData.skytab}
              </CompetitorCell>
            </AnnualCostRow>

            <SavingsRow variants={rowVariants}>
              <FixedFunctionCell variants={cellVariants}>
                {t('comparisonTable.rows.savings')}
              </FixedFunctionCell>
              <FixedSabsusCell variants={cellVariants}>-</FixedSabsusCell>
              <CompetitorCell variants={cellVariants}>
                {savingsData.toast}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {savingsData.square}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {savingsData.clover}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {savingsData.otter}
              </CompetitorCell>
              <CompetitorCell variants={cellVariants}>
                {savingsData.skytab}
              </CompetitorCell>
            </SavingsRow>
          </TableBody>
        </StyledTable>
      </TableWrapper>
    </ComparisonContainer>
  );
};

export default ComparisonTable;