import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';
import ja from 'react-intl/locale-data/ja';
import { localeData } from '../i18n';
import { theme } from '../components/common';

import Header from '../components/header';
import './index.css';

const Page = styled.div`
  max-width: ${props => props.theme.pageMaxWidth};
  padding: 0 ${props => props.theme.pageHorizontalPadding};

  @media screen and (max-width: 768px) {
    padding: 0 ${props => props.theme.pageHorizontalPaddingMobile};
  }
`;

addLocaleData([...ja]);

const TemplateWrapper = ({ children }) => {
  const displayedLocale = 'ja';
  return (
    <IntlProvider
      locale={displayedLocale}
      messages={localeData[displayedLocale]}
      defaultLocale="ja"
    >
      <ThemeProvider theme={theme}>
        <Fragment>
          <Helmet
            title="Teia"
            meta={
              [
                // { name: 'description', content: 'Sample' },
                // { name: 'keywords', content: 'sample, something' },
              ]
            }
          />
          <Header />
          <Page>{children()}</Page>
        </Fragment>
      </ThemeProvider>
    </IntlProvider>
  );
};

TemplateWrapper.defaultProps = {
  children: () => null,
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
