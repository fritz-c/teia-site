import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import logo from '../images/logo.svg';

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
  width: 100px;
  margin: 0 0 0 2rem;
`;

const Nav = styled.nav`
  flex: 2 1 auto;
  text-align: right;
  font-weight: 200;
  align-self: center;
`;

const LinkList = styled.ul`
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    background: white;
    padding-top: 3rem;
    transform: translateY(-100%) scaleY(0);
    transition: transform 300ms;
    text-align: center;
    overflow: auto;
    height: 100vh;
    input:checked ~ & {
      transform: translateY(0) scaleY(1);
    }
  }
`;
const LinkListItem = styled.li`
  display: inline-block;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0.6rem;
    font-size: 1.3rem;
  }
`;
const MenuStateWatcher = styled.input`
  display: none;
`;
const MenuToggler = styled.label`
  display: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  line-height: 0;
  position: relative;
  span {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    display: inline-block;
    background: black;
    border-radius: 100px;
    transition: opacity 300ms, transform 300ms, background-color 300ms;
    &:first-child {
      top: 5px;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      bottom: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 15px;
    right: 30px;
    z-index: 2;
    display: inline-block;
    input:checked ~ & {
      position: fixed;
      span {
        background-color: #282828;
        &:first-child {
          transform: translateY(8px) rotateZ(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: translateY(-8px) rotateZ(-45deg);
        }
      }
    }
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
    box-shadow: 0 4px 0 -1px ${props => props.theme.main};
  }

  &:hover {
    color: ${props => props.theme.main};
  }

  &:active {
    text-shadow: 0 0 1px ${props => props.theme.main};
  }
`;

const Dropdown = styled(LinkListItem)`
  position: relative;
`;

const DropdownContent = styled.div`
  text-align: left;
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Dropdown}:hover > & {
    display: block;
  }

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #ddd;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: static;
    background: none;
    box-shadow: none;
    text-align: center;
    font-size: 80%;
    padding: 10px 0;

    a {
      padding: 6px;
      color: #999;
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <HeaderEl>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <FormattedMessage id="teia">
              {teiaName => <Logo alt={teiaName} src={logo} />}
            </FormattedMessage>
          </Link>
        </h1>

        <Nav>
          <MenuStateWatcher
            id="menu-state-watcher"
            type="checkbox"
            checked={menuOpen}
            onChange={event =>
              this.setState({ menuOpen: event.target.checked })
            }
          />

          <LinkList
            onClick={event =>
              event.target.parentNode &&
              event.target.parentNode.href &&
              menuOpen &&
              this.setState({ menuOpen: false })
            }
          >
            <LinkListItem>
              <NavLink to="/" activeClassName="selected">
                <FormattedMessage id="home" />
              </NavLink>
            </LinkListItem>
            <LinkListItem>
              <NavLink to="/company" activeClassName="selected">
                <FormattedMessage id="companyLink" />
              </NavLink>
            </LinkListItem>
            <Dropdown>
              <NavLink to="/business" activeClassName="selected">
                <FormattedMessage id="businessLink" />
              </NavLink>
              <DropdownContent>
                <NavLink to="/business#trade">
                  <FormattedMessage id="businessLink.trade" />
                </NavLink>
                <NavLink to="/business#distribution">
                  <FormattedMessage id="businessLink.distribution" />
                </NavLink>
                <NavLink to="/business#oem-odm">
                  <FormattedMessage id="businessLink.oemOdm" />
                </NavLink>
              </DropdownContent>
            </Dropdown>
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

          <MenuToggler
            htmlFor="menu-state-watcher"
            onClick={e => e.stopPropagation()}
          >
            <span />
            <span />
            <span />
          </MenuToggler>
        </Nav>
      </HeaderEl>
    );
  }
}

export default Header;
