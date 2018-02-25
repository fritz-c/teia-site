import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Row, Column, SectionTitle } from '../components/common';
import ContactForm from '../components/contact-form';
import teiaBadge from '../images/teia-badge.png';

const Container = Row.extend`
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
  <Container>
    <Column>
      <SectionTitle>
        <FormattedMessage id="contact" />
      </SectionTitle>
      <ContactForm />
    </Column>
    <Column style={{ flexGrow: 0 }}>
      <TeiaBadge />
    </Column>
  </Container>
);

export default SecondPage;
