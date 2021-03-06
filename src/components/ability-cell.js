import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 1 auto;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.9);
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4));
  text-align: center;
  padding-top: 35px;
`;

const Icon = styled.img`
  margin-bottom: 0.5rem;
`;
const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
`;
const Description = styled.p`
  font-size: 0.8rem;
`;

const AbilityCell = ({ src, type }) => (
  <Container>
    <Icon src={src} alt="" />
    <Title>
      <FormattedMessage id={`top.ability${type}Title`} />
    </Title>
    <Description>
      <FormattedMessage id={`top.ability${type}Description`} />
    </Description>
  </Container>
);

AbilityCell.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AbilityCell;
