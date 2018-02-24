import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import heroImage from '../images/hero.jpg';
import { ButtonLink } from '../components/common';

const HeroContainer = styled.div`
  background: url(${heroImage});
  background-size: cover;
  color: white;
  padding: 120px 65px;
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
  padding: 40px;
  margin: 40px;
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

const IndexPage = () => (
  <div>
    <HeroContainer>
      <HeroTitle>
        <FormattedMessage id="top.heroTitle" />
      </HeroTitle>
      <HeroDescription>
        <FormattedMessage id="top.heroDescription" />
      </HeroDescription>
      <div>
        <ButtonLink to="/contact">
          <FormattedMessage id="contact" />
        </ButtonLink>
      </div>
      <ShadowContainer>
        <HrStub />
        <ValueTitle>
          <FormattedMessage id="top.valueTitle" />
        </ValueTitle>
        <ValueDescription>
          <FormattedMessage id="top.valueDescription" />
        </ValueDescription>
      </ShadowContainer>
    </HeroContainer>
  </div>
);

export default IndexPage;
