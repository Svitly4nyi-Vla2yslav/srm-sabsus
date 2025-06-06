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
import card1 from '../../assets/icons/cards/card1.png';
import card2 from '../../assets/icons/cards/card2.png';
import icon from '../../assets/icons/cards/Mobile Phone.svg';
import icon1 from '../../assets/icons/cards/Delivery Truck.svg';
import icon2 from '../../assets/icons/cards/Puzzle Piece.svg';
import icon3 from '../../assets/icons/cards/Wrapped Gift.svg';
import icon4 from '../../assets/icons/cards/Sparkles.svg';
import icon5 from '../../assets/icons/cards/Laptop.svg';
import icon6 from '../../assets/icons/cards1/Credit Card.svg';
import icon7 from '../../assets/icons/cards1/OfficeWorkerLightSkinTone.svg';
import icon8 from '../../assets/icons/cards1/White Square Button.svg';
import icon9 from '../../assets/icons/cards1/Shopping Cart.svg';
import icon0 from '../../assets/icons/cards1/Calendar.svg';
import icon11 from '../../assets/icons/cards2/Cooking.svg';
import icon12 from '../../assets/icons/cards2/Toolbox.svg';
import icon13 from '../../assets/icons/cards2/Alarm Clock.svg';
import icon14 from '../../assets/icons/cards2/Open Book.svg';
import card3 from '../../assets/icons/cards2/card3.png';
import card4 from '../../assets/icons/cards/card4.png';
import icon15 from '../../assets/icons/cards3/Package.svg';
import icon16 from '../../assets/icons/cards3/CardFileBox.svg';
import icon17 from '../../assets/icons/cards3/CannedFood.svg';
import icon18 from '../../assets/icons/cards4/Chart Increasing.svg';
import icon19 from '../../assets/icons/cards4/Money Bag.svg'; 
import icon20 from '../../assets/icons/cards4/CardIndexDividers.svg';
import icon21 from '../../assets/icons/cards4/Brain.svg';
import card5 from '../../assets/icons/cards/card5.png';
import card6 from '../../assets/icons/cards/card6.png';
import icon22 from '../../assets/icons/cards5/Megaphone.svg';
import icon23 from '../../assets/icons/cards5/Framed Picture.svg';
import icon24 from '../../assets/icons/cards5/Test Tube.svg';
import icon25 from '../../assets/icons/cards5/GlobeWithMeridians.svg';
import icon26 from '../../assets/icons/cards5/Label.svg';
import card7 from '../../assets/icons/cards/card7.png';
import icon27 from '../../assets/icons/cards6/Electric Plug.svg';
import icon28 from '../../assets/icons/cards6/Link.svg';
import icon29 from '../../assets/icons/cards6/Satellite Antenna.svg';
import icon30 from '../../assets/icons/cards6/dnk.svg';
import icon31 from '../../assets/icons/cards6/MobilePhoneOff.svg';





const AllinOneSRM: React.FC = () => {
  return (
    <AllinOneSRMContainer>
      <MainText>
        All-in-one CRM, POS & APP platform
        <CardButtonText src={icon5} alt="Laptop" />{' '}
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
              <CardButtonText src={icon} alt="Mobile app" />
            </CardButton>
            <CardButton>
              Delivery
              <CardButtonText src={icon1} alt="Delivery" />
            </CardButton>
            <CardButton>
              Loyalty
              <CardButtonText src={icon3} alt="Loyalty" />
            </CardButton>
            <CardButton>
              CRM
              <CardButtonText src={icon2} alt="CRM" />
            </CardButton>
            <CardButton>
              UX
              <CardButtonText src={icon4} alt="UX" />
            </CardButton>
          </CardButtonContainer>
        </Card>
        <Card>
          <CardTitle>POS & Staff Operations</CardTitle>
          <CardText>
            Smart cashier system + team control + flexible flows.
          </CardText>
          <CardIcon src={card2} alt="POS & Staff Operations" />
          <CardButtonContainer>
            <CardButton>
              POS
              <CardButtonText src={icon6} alt="POS" />
            </CardButton>
            <CardButton>
              Staff
              <CardButtonText src={icon7} alt="Staff" />
            </CardButton>
            <CardButton>
              QR
              <CardButtonText src={icon8} alt="QR" />
            </CardButton>
            <CardButton>
              Orders
              <CardButtonText src={icon9} alt="Orders" />
            </CardButton>
            <CardButton>
              Shifts
              <CardButtonText src={icon0} alt="Shifts" />
            </CardButton>
          </CardButtonContainer>
        </Card>
        <Card>
          <CardTitle>Kitchen & Fulfillment</CardTitle>
          <CardText>
            Streamlined kitchen workflows and real-time cooking status.
          </CardText>
          <CardIcon
            style={{
              border: 'none',
              width: '100%',
              background: 'transparent',
              overflow: 'visible',
              backdropFilter: 'none',
            }}
            src={card3}
            alt="Customer Experience Suite"
          />
          <CardButtonContainer>
            <CardButton>
              Kitchen
              <CardButtonText src={icon11} alt="Kitchen" />
            </CardButton>
            <CardButton>
              Assembly
              <CardButtonText src={icon12} alt="Delivery" />
            </CardButton>
            <CardButton>
              Timers
              <CardButtonText src={icon13} alt="Timers" />
            </CardButton>
            <CardButton>
              Recipes
              <CardButtonText src={icon14} alt="Recipes" />
            </CardButton>
          </CardButtonContainer>
        </Card>
        <Card>
          <CardTitle>Inventory & Warehousing</CardTitle>
          <CardText>
            Full control over ingredients, supplies, and stock flow.
          </CardText>
          <CardIcon src={card4} alt="Customer Experience Suite" />
          <CardButtonContainer>
            <CardButton>
              Stock
              <CardButtonText src={icon15} alt="Mobile app" />
            </CardButton>
            <CardButton>
              Inventory
              <CardButtonText src={icon16} alt="Delivery" />
            </CardButton>
            <CardButton>
              Ingredients
              <CardButtonText src={icon17} alt="Loyalty" />
            </CardButton>
          </CardButtonContainer>
        </Card>
        <Card>
          <CardTitle>Analytics & Management</CardTitle>
          <CardText>
            Finance, reports, performance metrics — visually and smart.
          </CardText>
          <CardIcon style={{position: "absolute", top: "13%", left: "0", borderRadius: 24, height: "82%", width: "100%", objectFit: "cover", overflow: "hidden"}} src={card5} alt="Customer Experience Suite" />    
          <CardButtonContainer>
            <CardButton>
              Analytics
              <CardButtonText src={icon18} alt="Mobile app" />
            </CardButton>
            <CardButton>
              Finance
              <CardButtonText src={icon19} alt="Delivery" />
            </CardButton>
            <CardButton>
              Reports
              <CardButtonText src={icon21} alt="Loyalty" />
            </CardButton>
            <CardButton>
              AI
              <CardButtonText src={icon20} alt="CRM" />
            </CardButton>
          </CardButtonContainer>
        </Card>
        <Card>
          <CardTitle>Marketing & Customization</CardTitle>
          <CardText>
         Push your brand forward with full control.
          </CardText>
          <CardIcon src={card6} alt="Customer Experience Suite" />
          <CardButtonContainer>
            <CardButton>
              Marketing
              <CardButtonText src={icon22} alt="Marketing" />
            </CardButton>
            <CardButton>
              Branding
              <CardButtonText src={icon23} alt="Branding" />
            </CardButton>
            <CardButton>
              White-label
              <CardButtonText src={icon24} alt="White-label" />
            </CardButton>
            <CardButton>
             Multilingual
              <CardButtonText src={icon25} alt="Multilingual" />
            </CardButton>
            <CardButton>
             Promos
              <CardButtonText src={icon26} alt="Promos" />
            </CardButton>
          </CardButtonContainer>
        </Card>
        <Card>
          <CardTitle>Integration & Scaling</CardTitle>
          <CardText>
           Open infrastructure. Grow as you go.
          </CardText>
          <CardIcon src={card7} alt="Customer Experience Suite" />
          <CardButtonContainer>
            <CardButton>
            API
              <CardButtonText src={icon27} alt="API" />
            </CardButton>
            <CardButton>
             Integration
              <CardButtonText src={icon28} alt="Integration" />
            </CardButton>
            <CardButton>
           Scaling
              <CardButtonText src={icon29} alt="Scaling" />
            </CardButton>
            <CardButton>
              Multiformat
              <CardButtonText src={icon30} alt="Multiformat" />
            </CardButton>
            <CardButton>
              Offline
              <CardButtonText src={icon31} alt="Offline" />
            </CardButton>
          </CardButtonContainer>
        </Card>
      </CardContainer>
    </AllinOneSRMContainer>
  );
};

export default AllinOneSRM;
