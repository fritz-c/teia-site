import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Row, Column, Description } from './common';

const Container = Row.extend`
  margin: 10px 0;
  background: ${props => props.bgColor};
  color: white;
  border-radius: 5px;
  padding: 18px 110px 0 0;

  @media screen and (max-width: 768px) {
    padding: 20px 25px;
  }
`;

const IconColumn = Column.extend`
  flex: 1 0 136px;
  align-self: flex-end;

  @media screen and (max-width: 768px) {
    align-self: center;
    flex-basis: auto;
  }
`;

const Icon = styled.img`
  max-width: none;
  margin: ${props => props.margin || '0 36px 0 0'};
  display: block;

  @media screen and (max-width: 768px) {
    margin: 25px 0;
  }
`;

const Title = styled.h4`
  font-weight: 200;
  margin-bottom: 0.5rem;
`;
const TitleFocus = styled.span`
  font-weight: 400;
`;

const ServiceCell = ({ src, type, bgColor, iconMargin }) => (
  <Container bgColor={bgColor}>
    <IconColumn>
      <Icon src={src} alt="" margin={iconMargin} />
    </IconColumn>
    <Column style={{ flexBasis: '100%' }}>
      <Title>
        <FormattedMessage
          id="top.serviceForCustomer"
          values={{
            service: (
              <TitleFocus>
                <FormattedMessage id={`top.service${type}Title`} />
              </TitleFocus>
            ),
          }}
        />
      </Title>
      <Description>
        <FormattedMessage id={`top.service${type}Description`} />
      </Description>
    </Column>
  </Container>
);

ServiceCell.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  iconMargin: PropTypes.string,
};

ServiceCell.defaultProps = {
  iconMargin: null,
};

export default ServiceCell;
