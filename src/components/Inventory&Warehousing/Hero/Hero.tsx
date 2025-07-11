import React from 'react';
import { styled } from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: visible;
  margin-top: 78px;
`;

export const CostomerWrapp = styled.div`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
  z-index: 3;
`;

export const TextIcon = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: rgba(51, 51, 51, 0.55);
  padding-bottom: 80px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.55);
`;

export const LogoContainer = styled.div`
  border-radius: 12px;
  padding: 9px;
  width: 66px;
  height: 66px;
  box-shadow: inset 0 0 3px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec 0%, #292b86 100%);
`;

export const LogoIcon = styled.img`
  width: 48px;
  height: 40px;
`;

export const BorderIcon = styled.div`
  border: 1px solid rgba(51, 51, 51, 0.55);
  border-radius: 16px;
  width: 80px;
  height: 80px;
`;

// New styled components from the inventory sync component
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 58px;
  padding-left: 45px;
  padding-right: 45px;
  margin-bottom: 77px;
  margin-left: 1px;
  margin-right: 1px;
`;

const RowView = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const RowView2 = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 19px;
`;

const RowView3 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  gap: 22px;
`;

const Text = styled.span`
  color: #333333;
  font-size: 12px;
  text-align: center;
  width: 80px;
`;

const Box = styled.div`
  width: 80px;
  height: 1px;
  background: #3333338C;
`;

const View = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #3333338C;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const Image = styled.img`
  height: 58px;
  margin-left: 11px;
  margin-right: 11px;
  align-self: stretch;
  object-fit: fill;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Image2 = styled.img`
  width: 204px;
  height: 122px;
  object-fit: fill;
`;

const AbsoluteImage = styled.img`
  position: absolute;
  bottom: -57px;
  left: 69px;
  width: 66px;
  height: 66px;
  object-fit: fill;
`;

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <CostomerWrapp>
        <Column>
          <RowView>
            <Text>Inventory Sync</Text>
            <Text>Smart<br />Flow</Text>
          </RowView>
          <RowView2>
            <Box />
            <Box />
          </RowView2>
          <RowView3>
            <View>
              <Image 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oINML7UMnU/iwtmmrtn_expires_30_days.png" 
                alt="Image 1"
              />
            </View>
            <View>
              <Image 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oINML7UMnU/ail0kbyf_expires_30_days.png" 
                alt="Image 2"
              />
            </View>
            <View>
              <Image 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oINML7UMnU/ksmkft02_expires_30_days.png" 
                alt="Image 3"
              />
            </View>
          </RowView3>
          <Column2>
            <Image2 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oINML7UMnU/nszxvv4e_expires_30_days.png" 
              alt="Main Image"
            />
            <AbsoluteImage 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oINML7UMnU/0pcb5i4t_expires_30_days.png" 
              alt="Absolute Image"
            />
          </Column2>
        </Column>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;