import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import logo from '../images/logo.png';

const HeaderEl = styled.header`
  margin: 0 auto;
  max-width: ${props => props.theme.pageMaxWidth};
  padding: 0.5rem ${props => props.theme.pageHorizontalPadding};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0.5rem ${props => props.theme.pageHorizontalPaddingMobile};
  }
`;
const Logo = styled.img`
  margin: 0 0 0 2rem;
`;
const LinkList = styled.ul`
  list-style: none;
  margin: 0;
`;
const LinkListItem = styled.li`
  display: inline-block;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.3rem 0.8rem;
  color: #666;
  display: inline-block;
  transition: color 100ms, text-shadow 300ms;

  &.selected {
    color: ${props => props.theme.main};
    box-shadow: 0 3px 0 0 ${props => props.theme.main};
  }

  &:hover {
    color: ${props => props.theme.main};
  }

  &:active {
    text-shadow: 0 0 1px ${props => props.theme.main};
  }
`;

const Header = () => (
  <HeaderEl>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <FormattedMessage id="teia">
          {teiaName => <Logo alt={teiaName} src={logo} />}
        </FormattedMessage>
      </Link>
    </h1>
    <Nav>
      <LinkList>
        <LinkListItem>
          <NavLink to="/" exact activeClassName="selected">
            <FormattedMessage id="home" />
          </NavLink>
        </LinkListItem>
        <LinkListItem>
          <NavLink to="/company" activeClassName="selected">
            <FormattedMessage id="companyLink" />
          </NavLink>
        </LinkListItem>
        <LinkListItem>
          <NavLink to="/business" activeClassName="selected">
            <FormattedMessage id="businessLink" />
            {/* businessLink.trade
        businessLink.distribution
        businessLink.oemOdm */}
          </NavLink>
        </LinkListItem>
        <LinkListItem>
          <NavLink to="/partners" activeClassName="selected">
            <FormattedMessage id="partnersLink" />
          </NavLink>
        </LinkListItem>
        <LinkListItem>
          <NavLink to="/contact" activeClassName="selected">
            <FormattedMessage id="contact" />
          </NavLink>
        </LinkListItem>
      </LinkList>
    </Nav>
  </HeaderEl>
);

export default Header;
