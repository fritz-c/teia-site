import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Row, Column, ButtonLink } from './common';

const FooterEl = styled.footer`
  background: #4a4a4a;
  background: linear-gradient(to bottom, #252525 0%, #4a4a4a 30%, #4a4a4a 100%);
  color: #ccc;
  margin: 0 auto;
  max-width: ${props => props.theme.pageMaxWidth};
  padding: 1.5rem ${props => props.theme.pageHorizontalPadding} 0
    ${props => props.theme.pageHorizontalPadding};

  @media screen and (max-width: 768px) {
    padding: 2rem ${props => props.theme.pageHorizontalPaddingMobile};
    text-align: center;
  }
`;

const FooterRow = styled(Row)`
  justify-content: space-between;
  align-items: flex-end;
`;

const FooterColumn = styled(Column)`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0 25px 25px 25px;
    align-self: center;

    &:last-child {
      margin: 0 25px 25px 25px;
    }
  }
`;

const ContactColumn = styled(FooterColumn)`
  text-align: right;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 0.75rem;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => (
  <FooterEl id="about">
    <Title>
      <FormattedMessage id="companyInfo" />
    </Title>
    <FooterRow>
      <FooterColumn>
        <Description>
          <FormattedMessage id="company.basicInfo" />
        </Description>
      </FooterColumn>
      <FooterColumn>
        <Description>
          <FormattedMessage id="company.japanBranch" />
        </Description>
      </FooterColumn>
      <FooterColumn>
        <Description>
          <FormattedMessage id="company.chinaBranch" />
        </Description>
      </FooterColumn>
      <ContactColumn>
        <Description>
          <FormattedMessage id="consultWithUs" />
        </Description>
        <ButtonLink to="/contact">
          <FormattedMessage id="contact" />
        </ButtonLink>
      </ContactColumn>
    </FooterRow>
  </FooterEl>
);

export default Footer;
