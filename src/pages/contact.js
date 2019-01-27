import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Row, Column, SectionTitle } from '../components/common';
import ContactForm from '../components/contact-form';
import Layout from '../components/layout';
import teiaBadge from '../images/teia-badge.png';

const Container = styled(Row)`
  max-width: 700px;
  margin: 2rem auto 4rem auto;
  padding: 25px;
  align-items: center;
  background: #fef9f6;
  background: linear-gradient(
    to left,
    transparent 0%,
    transparent 20%,
    #fef9f6 20.00001%,
    #fef9f6 100%
  );

  @media screen and (max-width: 768px) {
    background: #fef9f6;
  }
`;

const TeiaBadge = styled.img.attrs({
  alt: '',
  src: teiaBadge,
})`
  width: 210px;
  max-width: none;
  margin: 0 0 0 70px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SecondPage = () => (
  <Layout>
    <Container>
      <Column style={{ width: '100%' }}>
        <SectionTitle>
          <FormattedMessage id="contact" />
        </SectionTitle>
        <ContactForm />
      </Column>
      <Column style={{ flexGrow: 0 }}>
        <TeiaBadge />
      </Column>
    </Container>
  </Layout>
);

export default SecondPage;
