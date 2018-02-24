import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { ButtonLink } from '../components/common';
import AbilityCell from '../components/ability-cell';
import heroImage from '../images/hero.jpg';
import teiaBadge from '../images/teia-badge.png';
import airplaneIcon from '../images/circle-airplane.png';
import contractIcon from '../images/circle-contract.png';
import handshakeIcon from '../images/circle-handshake.png';
import packagesIcon from '../images/circle-packages.png';
import shipIcon from '../images/circle-ship.png';

const HeroContainer = styled.div`
  background: url(${heroImage}) 70% 10%;
  background-size: cover;
  color: white;
  padding: 120px 65px 100px 65px;

  @media screen and (max-width: 768px) {
    padding: 40px 25px;
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
    margin: 40px 0 0 0;
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.6em;
  font-weight: 200;
`;

const ValueDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
  white-space: pre-wrap;
  opacity: 0.7;
`;

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

const AbilitiesContainer = styled.div`
  display: flex;
  margin-top: -100px;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    margin: 0;
    flex-direction: column;
  }
`;

const Row = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  flex: 1 1 auto;
`;

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
            <ValueDescription>
              <FormattedMessage id="top.valueDescription" />
            </ValueDescription>
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
      ].map(props => <AbilityCell {...props} />)}
    </AbilitiesContainer>
  </div>
);

export default IndexPage;
