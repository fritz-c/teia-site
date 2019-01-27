import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layout';
import heroImage from '../images/hero.jpg';

const HeroContainer = styled.div`
  background: url(${heroImage}) 70% 10%;
  background-size: cover;
  color: white;
  padding: 120px 65px 280px 65px;

  @media screen and (max-width: 768px) {
    padding: 80px 25px 280px 25px;
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

const IndexPage = () => (
  <Layout>
    <div>
      <HeroContainer>
        <HeroTitle>
          <FormattedMessage id="top.heroTitle" />
        </HeroTitle>
        <HeroDescription>
          <FormattedMessage id="top.heroDescription" />
        </HeroDescription>
      </HeroContainer>
    </div>
  </Layout>
);

export default IndexPage;
