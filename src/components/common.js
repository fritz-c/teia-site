import Link from 'gatsby-link';
import styled from 'styled-components';

export const theme = {
  main: '#dd6623',
  pageMaxWidth: '1280px',
  pageHorizontalPadding: '2rem',
  pageHorizontalPaddingMobile: '0',
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

export const Row = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Column = styled.div`
  flex: 1 1 auto;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
  white-space: pre-wrap;
`;
