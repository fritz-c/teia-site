import Link from 'gatsby-link';
import styled from 'styled-components';

export const theme = {
  main: '#dd6623',
};

export const Button = styled.button`
  background: #fff;
  border-radius: 0;
  border: solid gray 1px;
  color: ${props => props.theme.main};
  padding: 0.3rem 2rem;

  &:hover {
    background: #f7f7f7;
  }

  &:active {
    background: #fff;
  }
`;

export const ButtonLink = Button.withComponent(Link).extend`
  text-decoration: none;
  display: inline-block;
`;
