import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const HeaderEl = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Header = () => (
  <HeaderEl>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <FormattedMessage id="teia">
            {teiaName => <img alt={teiaName} src="/static/images/logo.png" />}
          </FormattedMessage>
        </Link>
      </h1>
    </div>
  </HeaderEl>
);

export default Header;
