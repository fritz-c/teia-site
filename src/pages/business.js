import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Row, Column, Description, SectionTitle } from '../components/common';
import ServiceCell from '../components/service-cell';
import AbilityCell from '../components/ability-cell';
import teiaBadge from '../images/teia-badge.png';
import airplaneIcon from '../images/circle-airplane.png';
import contractIcon from '../images/circle-contract.png';
import handshakeIcon from '../images/circle-handshake.png';
import packagesIcon from '../images/circle-packages.png';
import shipIcon from '../images/circle-ship.png';
import whiteConversationIcon from '../images/icon-conversation.png';
import whitePackageIcon from '../images/icon-package.png';
import whiteClipboardIcon from '../images/icon-clipboard.png';
import whiteAirplaneIcon from '../images/icon-airplane.png';
import whiteShipIcon from '../images/icon-ship.png';
import businesspeopleImage from '../images/businesspeople.png';
import globeImage from '../images/globe.png';
import tradeImage1 from '../images/trade1.png';
import tradeImage2 from '../images/trade2.png';
import tradeImage3 from '../images/trade3.png';
import tradeImage4 from '../images/trade4.png';
import tradeImage5 from '../images/trade5.png';

const MyDiv = styled.div`
  margin: 2rem auto 4rem auto;
  padding: 25px;
`;

const MyP = styled.p`
  white-space: pre-wrap;
`;

const LogisticsContainer = Row.extend`
  background: #fef9f6;
  background: linear-gradient(
    to left,
    transparent 0%,
    transparent 20%,
    #fef9f6 20.00001%,
    #fef9f6 100%
  );
  padding: 60px 0 0 110px;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    background: #fef9f6;
    padding: 30px;
  }
`;

const LogisticsMiniTitle = styled.h3`
  color: ${props => props.theme.main};
  font-weight: 400;
  font-size: 0.85rem;
  margin-bottom: 0.7rem;
`;

const LogisticsTitle = SectionTitle.extend`
  margin-bottom: 2rem;
`;

const BusinesspeopleImage = styled.img.attrs({
  src: businesspeopleImage,
  alt: '',
})`
  height: 300px;
  width: 389px;
  max-width: none;
  margin: 0 0 0 2rem;
  @media screen and (max-width: 768px) {
    margin: 0;
    height: 150px;
    width: 195px;
  }
`;

const GlobeImage = styled.img.attrs({
  src: globeImage,
  alt: '',
})`
  max-width: none;
  margin: 0 2rem 0 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BusinessContainer = Row.extend`
  margin: 0 0 4rem 0;
  @media screen and (max-width: 768px) {
    margin: 25px 25px 4rem 25px;
  }
`;

const ShadowContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 40px 40px 0 40px;
  margin: 40px 40px 0 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 110px 0 0 0;
  }
`;

const ValueTitle = SectionTitle.extend``;

const TeiaBadge = styled.img.attrs({
  alt: '',
  src: teiaBadge,
})`
  width: 210px;
  max-width: none;
  margin: 0;
`;

const AbilitiesContainer = Row.extend`
  margin: 0 40px 2rem 40px;

  @media screen and (max-width: 768px) {
    margin: 0 25px;
  }
`;

const GenericContainer = styled.div`
  margin: auto;
  max-width: 800px;
`;

const MicroTitle = styled.h4``;

const BusinessPage = () => (
  <MyDiv>
    <GenericContainer>
      <SectionTitle>
        <FormattedMessage id="businessLink.trade" />
      </SectionTitle>
      <p>
        <FormattedMessage id="trade.intro" />
      </p>
      <p>
        <FormattedMessage id="trade.handledItems" />
      </p>
      <LogisticsMiniTitle>
        <FormattedMessage id="trade.item1" />
      </LogisticsMiniTitle>
      <img src={tradeImage1} alt="" />

      <LogisticsMiniTitle>
        <FormattedMessage id="trade.item2" />
      </LogisticsMiniTitle>
      <img src={tradeImage2} alt="" />

      <LogisticsMiniTitle>
        <FormattedMessage id="trade.item3" />
      </LogisticsMiniTitle>
      <img src={tradeImage3} alt="" />

      <LogisticsMiniTitle>
        <FormattedMessage id="trade.item4" />
      </LogisticsMiniTitle>
      <img src={tradeImage4} alt="" />

      <LogisticsMiniTitle>
        <FormattedMessage id="trade.item5" />
      </LogisticsMiniTitle>
      <img src={tradeImage5} alt="" />
    </GenericContainer>
    <SectionTitle>
      <FormattedMessage id="businessLink.distribution" />
    </SectionTitle>
    <ShadowContainer>
      <Row style={{ alignItems: 'center' }}>
        <Column>
          <ValueTitle id="quality">
            <FormattedMessage id="top.valueTitle" />
          </ValueTitle>
          <Description>
            <FormattedMessage id="top.valueDescription" />
          </Description>
        </Column>
        <Column>
          <TeiaBadge />
        </Column>
      </Row>
    </ShadowContainer>

    <AbilitiesContainer>
      {[
        { type: 'Confer', src: handshakeIcon },
        { type: 'Packing', src: packagesIcon },
        { type: 'Clearance', src: contractIcon },
        { type: 'AirFreight', src: airplaneIcon },
        { type: 'SeaFreight', src: shipIcon },
      ].map(ability => <AbilityCell key={ability.type} {...ability} />)}
    </AbilitiesContainer>

    <LogisticsContainer id="distribution">
      <Column>
        <LogisticsMiniTitle>
          <FormattedMessage id="top.logisticsMiniTitle" />
        </LogisticsMiniTitle>
        <LogisticsTitle>
          <FormattedMessage id="top.logisticsTitle" />
        </LogisticsTitle>
        <Description>
          <FormattedMessage id="top.logisticsDescription1" />
        </Description>
        <Description>
          <FormattedMessage id="top.logisticsDescription2" />
        </Description>
      </Column>
      <Column style={{ alignSelf: 'center' }}>
        <BusinesspeopleImage />
      </Column>
    </LogisticsContainer>

    <BusinessContainer>
      <Column>
        <GlobeImage />
      </Column>
      <Column>
        <MicroTitle>
          <FormattedMessage id="top.businessTitle" />
        </MicroTitle>
        <Description>
          <FormattedMessage id="top.businessDescription" />
        </Description>
        <MicroTitle>
          <FormattedMessage id="top.servicesTitle" />
        </MicroTitle>
        {[
          {
            type: 'Confer',
            src: whiteConversationIcon,
            bgColor: '#2381BE',
            iconMargin: '0 36px 0 10px',
          },
          {
            type: 'Packing',
            src: whitePackageIcon,
            bgColor: '#146843',
            iconMargin: '0 36px 5px 0',
          },
          {
            type: 'Clearance',
            src: whiteClipboardIcon,
            bgColor: '#B23178',
            iconMargin: '0 36px 8px 22px',
          },
          {
            type: 'AirFreight',
            src: whiteAirplaneIcon,
            bgColor: '#5F99C2',
            iconMargin: '0 36px 15px 0',
          },
          {
            type: 'SeaFreight',
            src: whiteShipIcon,
            bgColor: '#6CA84A',
            iconMargin: '0 36px 20px 0',
          },
        ].map(service => <ServiceCell key={service.type} {...service} />)}
      </Column>
    </BusinessContainer>

    <SectionTitle>
      <FormattedMessage id="businessLink.oemOdm" />
    </SectionTitle>
    <GenericContainer>
      <FormattedMessage id="oemOdm.flow" />
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step1.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step1.description" />
      </MyP>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step2.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step2.description" />
      </MyP>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step3.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step3.description" />
      </MyP>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step4.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step4.description" />
      </MyP>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step5.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step5.description" />
      </MyP>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step6.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step6.description" />
      </MyP>

      <MicroTitle>
        <FormattedMessage id="oemOdm.order" />
      </MicroTitle>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step7.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step7.description" />
      </MyP>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step8.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step8.description" />
      </MyP>

      <MicroTitle>
        <FormattedMessage id="oemOdm.delivery" />
      </MicroTitle>
      <LogisticsMiniTitle>
        <FormattedMessage id="oemOdm.step9.title" />
      </LogisticsMiniTitle>
      <MyP>
        <FormattedMessage id="oemOdm.step9.description" />
      </MyP>
    </GenericContainer>
  </MyDiv>
);

export default BusinessPage;
