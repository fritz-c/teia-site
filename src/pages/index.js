import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { ButtonLink, Row, Column, Description } from '../components/common';
import AbilityCell from '../components/ability-cell';
import ServiceCell from '../components/service-cell';
import heroImage from '../images/hero.jpg';
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

const HeroContainer = styled.div`
  background: url(${heroImage}) 70% 10%;
  background-size: cover;
  color: white;
  padding: 120px 65px 100px 65px;

  @media screen and (max-width: 768px) {
    padding: 80px 25px 40px 25px;
    background-position: 65% 50%;
  }
`;

const HeroTitle = styled.h2`
  font-size: 2.5em;
  font-weight: 200;
  margin-bottom: 0.5rem;
`;

const HeroDescription = styled.h3`
  font-size: 1.6em;
  font-weight: 200;
  margin-bottom: 2.7rem;
`;

const ShadowContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 40px 40px 0 40px;
  margin: 40px 40px 0 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 110px 0 0 0;
  }
`;

const SectionTitle = styled.h2`
  font-weight: 400;
`;

const ValueTitle = SectionTitle.extend``;

const HrStub = styled.hr`
  border: none;
  max-width: 7rem;
  border-bottom: solid white 7px;
`;

const TeiaBadge = styled.img.attrs({
  alt: '',
  src: teiaBadge,
})`
  width: 210px;
  max-width: none;
  margin: 0;
`;

const AbilitiesContainer = Row.extend`
  margin: -100px 40px 2rem 40px;

  @media screen and (max-width: 768px) {
    margin: 0 25px;
  }
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

const MicroTitle = styled.h4``;

const IndexPage = () => (
  <div>
    <HeroContainer>
      <HeroTitle>
        <FormattedMessage id="top.heroTitle" />
      </HeroTitle>
      <HeroDescription>
        <FormattedMessage id="top.heroDescription" />
      </HeroDescription>
      <ButtonLink to="/contact">
        <FormattedMessage id="contact" />
      </ButtonLink>
      <ShadowContainer>
        <Row style={{ alignItems: 'center' }}>
          <Column>
            <HrStub />
            <ValueTitle>
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
    </HeroContainer>

    <AbilitiesContainer>
      {[
        { type: 'Confer', src: handshakeIcon },
        { type: 'Packing', src: packagesIcon },
        { type: 'Clearance', src: contractIcon },
        { type: 'AirFreight', src: airplaneIcon },
        { type: 'SeaFreight', src: shipIcon },
      ].map(ability => <AbilityCell key={ability.type} {...ability} />)}
    </AbilitiesContainer>

    <LogisticsContainer>
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
  </div>
);

export default IndexPage;
