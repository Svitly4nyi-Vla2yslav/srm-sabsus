import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper as SwiperCore } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface StatValueProps {
  $large?: boolean;
  $positive?: boolean;
}

// Styled Components for the Header
const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: center;
align-items: center;
justify-content: center;
gap: 40px;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const BadgeWrapper = styled.div`
  position: relative;
  width: 127px;
`;

const AbsoluteBadge = styled.div`
  position: absolute;
  width: 127px;
  height: 28px;
  top: 0;
  left: 0;
`;

interface BadgeOutlineProps {
  opacity?: number | string;
}

const BadgeOutline = styled.div<BadgeOutlineProps>`
  position: absolute;
  width: 127px;
  height: 28px;
  border: 1px solid #fff;
  border-radius: 24px;
  
  opacity: ${props => props.opacity || 1};
`;

const BadgeContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 16px;
  border-radius: 25px;
    padding: 4px;
    width: 22px;
    height: 22px;
    font-size: 13px;
    box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08), 0 0px 20px rgba(464, 367, 391, 0.99);
    background: linear-gradient(315deg, rgba(245, 228, 253, 0.58) 7%, rgb(207 121 250) 86%) rgba(255, 255, 255, 0.03);
`;

const BadgeButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 4px 4px 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 24px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 86%
    ),
    rgba(255, 255, 255, 0.03);
  box-shadow:
    0px 2px 4px -2px rgba(0, 0, 0, 0.08),
    0px 8px 16px -8px rgba(0, 0, 0, 0.03),
    0px -5px 6px 0px rgba(255, 255, 255, 0.03) inset,
    0px -8px 24px 0px rgba(255, 255, 255, 0.03) inset;
  width: 100%;
  border: none;
  outline: none;
`;

const BadgeText = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2em;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  border-radius: 1000px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 86%
    ),
    rgba(255, 255, 255, 0.03);
  overflow: hidden;
`;

const SmallIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
`;

const Title = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3em;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.2em;
  text-align: center;
  width: 100%;
`;

const Divider = styled.div`
  background: rgba(240, 37, 37, 0.25);
  width: 34px;
  height: 1px;
transform: rotate(90deg);
`;

// Styled Components for the Swiper Slides
const SlideContainer = styled.div`
  width: 343px;
  height: 545px;
  filter: blur(17.806726455688477px);
  position: relative;
  overflow: hidden;
`;

const SlideHeader = styled.div`
  padding: 16px 22px 0 22px;
  width: 343px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SlideContent = styled.div`
  padding: 0 8px 8px 8px;
  width: 343px;
  height: 492px;
  display: flex;
`;

const Sidebar = styled.div`
  border-radius: 8px;
  width: 105px;
  height: 454px;
  backdrop-filter: blur(48.08163833618164px);
  background: linear-gradient(
    157deg,
    rgba(6, 11, 38, 0.94) 0%,
    rgba(26, 31, 55, 0) 100%
  );
  padding: 16px;
`;

const SidebarDivider = styled.div`
  width: 94px;
  height: 1px;
  margin: 8px 0;
  background: linear-gradient(
    90deg,
    rgba(224, 225, 226, 0) 0%,
    #e0e1e2 50%,
    rgba(224, 225, 226, 0.16) 100%
  );
`;

const SidebarItem = styled.div<{ $active?: boolean }>`
  width: 87px;
  height: 21px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin-bottom: 4px;
  background: ${props => (props.$active ? 'var(--purple-800)' : 'transparent')};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.02);
  cursor: pointer;
`;

const SidebarItemText = styled.span<{ $active?: boolean }>`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: ${props => (props.$active ? '12px' : '10px')};
  line-height: 100%;
  color: var(--white-100);
  margin-left: 8px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 16px;
`;

const StatsContainer = styled.div`
  width: 641px;
  height: 32px;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const StatItem = styled.div`
  width: 153px;
  height: 32px;
  border-radius: 8px;
  backdrop-filter: blur(48.08163833618164px);
  background: linear-gradient(
    175deg,
    rgba(6, 11, 38, 0.74) 0%,
    rgba(26, 31, 55, 0.5) 100%
  );
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  color: #a0aec0;
`;

interface StatValueProps {
  large?: boolean;
  positive?: boolean;
}

const StatValue = styled.span<StatValueProps>`
  font-family: var(--second-family);
  font-weight: 700;
  font-size: ${props => (props.$large ? '14px' : '12px')};
  line-height: 140%;
  color: ${props => (props.$positive ? '#01b574' : 'var(--white-100)')};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  border: 0.2px solid rgba(226, 232, 240, 0.3);
  border-radius: 6px;
  width: 132px;
  height: 44px;
  background: #0f1535;
  padding: 0 12px;
  color: white;
  margin-right: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserText = styled.span`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #718096;
  margin-left: 4px;
`;

const FeatureSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const features = [
    {
      id: 'custom-identity',
      title: 'White-label Branding',
      subtitle: 'Custom app, site & receipts',
      icon: '/Fireworks.png',
      smallIcon: '/Fireworks(1).png',
      active: activeSlide === 0,
    },
    {
      id: 'role-access',
      title: 'Smart Permissions',
      subtitle: 'Access for cashiers and chefs',
      icon: '/ManOfficeWorker.png',
      smallIcon: '/ManOfficeWorker(1).png',
      active: activeSlide === 1,
    },
    {
      id: 'dynamic-offers',
      title: 'AI & Automation',
      subtitle: 'Dynamic offers & upsells',
      icon: '/Robot.png',
      smallIcon: '/Robot(1).png',
      active: activeSlide === 2,
    },
    {
      id: 'expandability',
      title: 'Open API Integration',
      subtitle: 'Connect tools, terminals & more',
      icon: '/ElectricPlug.png',
      smallIcon: '/ElectricPlug(1).png',
      active: activeSlide === 3,
    },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'menu', label: 'Menu', icon: '🍽️' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'promotions', label: 'Promotions', icon: '🎁' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.activeIndex);
  };
  const navigateToSlide = (index: number) => {
    setActiveSlide(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header with anchor links */}
      <HeaderContainer>
        {features.map((feature, index) => (
          <React.Fragment key={feature.id}>
            {index !== 0 && <Divider />}
            <FeatureCard onClick={() => navigateToSlide(index)}>
              <BadgeWrapper>
                <AbsoluteBadge>
                  <BadgeOutline opacity="0.66" />
                  <BadgeOutline />
                </AbsoluteBadge>
                <BadgeContent>
                  <IconWrapper>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      width={22}
                      height={22}
                    />
                  </IconWrapper>
                  <BadgeButton
                    style={{
                      boxShadow: feature.active
                        ? ' inset 0 0 20px 0 rgba(191, 123, 246, 0.7), inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1), 0 0 10px 6px rgba(191, 123, 246, 0.4) , 0 15px 30px -10px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.2)'
                        : 'none',
                    }}
                  >
                    <BadgeText>{feature.title.split(' ')[0]}</BadgeText>
                    <IconContainer>
                      <SmallIcon>
                        <img
                          src={feature.smallIcon}
                          alt={feature.title}
                          width={12}
                          height={12}
                        />
                      </SmallIcon>
                    </IconContainer>
                  </BadgeButton>
                </BadgeContent>
                <AbsoluteBadge>
                  <BadgeOutline opacity="0.66" />
                  <BadgeOutline />
                </AbsoluteBadge>
              </BadgeWrapper>
              <div>
                <Title>{feature.title}</Title>
                <Subtitle>{feature.subtitle}</Subtitle>
              </div>
            </FeatureCard>
          </React.Fragment>
        ))}
      </HeaderContainer>

      {/* Swiper component */}
      <div style={{ width: '100%', maxWidth: '800px', margin: '40px auto' }}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={handleSlideChange}
          initialSlide={activeSlide}
        >
          {features.map((_, index) => (
            <SwiperSlide key={index}>
              <SlideContainer>
                <SlideHeader>
                  {/* Header content with logo and icons */}
                  <div>Logo</div>
                  <div>Icons</div>
                </SlideHeader>
                <SlideContent>
                  <Sidebar>
                    <SidebarDivider />
                    {sidebarItems.map(item => (
                      <SidebarItem key={item.id} $active={item.active}>
                        <span>{item.icon}</span>
                        <SidebarItemText $active={item.active}>
                          {item.label}
                        </SidebarItemText>
                      </SidebarItem>
                    ))}
                  </Sidebar>
                  <MainContent>
                    <SearchContainer>
                      <h2>Dashboard</h2>
                      <SearchInput placeholder="Search..." />
                      <UserInfo>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M5.15587 1.02385C4.89314 0.740191 4.52618 0.583984 4.12115 0.583984C3.71397 0.583984 3.34579 0.739246 3.08428 1.02115C2.81993 1.30615 2.69113 1.69349 2.72137 2.11175C2.78132 2.93693 3.40925 3.6082 4.12115 3.6082C4.83306 3.6082 5.45991 2.93707 5.5208 2.11202C5.55145 1.69754 5.42184 1.31101 5.15587 1.02385Z"
                            fill="#718096"
                          />
                          <path
                            d="M6.49744 6.6321H1.7451C1.68289 6.63291 1.62129 6.61984 1.56477 6.59385C1.50825 6.56786 1.45824 6.52959 1.41837 6.48184C1.33062 6.37694 1.29524 6.23369 1.32144 6.08882C1.43538 5.45671 1.791 4.92572 2.34994 4.55295C2.84651 4.22205 3.47552 4.03992 4.12127 4.03992C4.76702 4.03992 5.39603 4.22218 5.89259 4.55295C6.45153 4.92558 6.80715 5.45657 6.9211 6.08869C6.94729 6.23355 6.91192 6.3768 6.82416 6.4817C6.78431 6.52948 6.7343 6.56777 6.67778 6.59379C6.62126 6.61981 6.55965 6.6329 6.49744 6.6321Z"
                            fill="#718096"
                          />
                        </svg>
                        <UserText>User</UserText>
                      </UserInfo>
                    </SearchContainer>

                    <StatsContainer>
                      <StatItem>
                        <StatText>
                          <StatLabel>Total Revenue</StatLabel>
                          <StatValue $large>$12,345</StatValue>
                        </StatText>
                        <span>📈</span>
                      </StatItem>
                      <StatItem>
                        <StatText>
                          <StatLabel>New Orders</StatLabel>
                          <StatValue $large>42</StatValue>
                        </StatText>
                        <span>🛒</span>
                      </StatItem>
                      <StatItem>
                        <StatText>
                          <StatLabel>Conversion</StatLabel>
                          <StatValue $positive>+12%</StatValue>
                        </StatText>
                        <span>📊</span>
                      </StatItem>
                    </StatsContainer>

                    {/* Additional content for each slide can be added here */}
                  </MainContent>
                </SlideContent>
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureSwiper;
