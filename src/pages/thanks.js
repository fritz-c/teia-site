import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { ButtonLink } from '../components/common';
import Layout from '../components/layout';

const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto 4rem auto;
  padding: 25px;
  background: #fef9f6;
`;

const ThankYouTitle = styled.h3``;
const ThankYouMessage = styled.p``;

const ContactSuccessPage = () => (
  <Layout>
    <Container>
      <ThankYouTitle>
        <FormattedMessage id="contact.thankYouTitle" />
      </ThankYouTitle>
      <ThankYouMessage>
        <FormattedMessage id="contact.thankYou" />
      </ThankYouMessage>

      <div style={{ textAlign: 'center' }}>
        <ButtonLink to="/">
          <FormattedMessage id="goToHome" />
        </ButtonLink>
      </div>
    </Container>
  </Layout>
);

export default ContactSuccessPage;
