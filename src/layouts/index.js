import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';
import ja from 'react-intl/locale-data/ja';
import { localeData } from '../i18n';
import { theme } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import teiaBadge from '../images/teia-badge.png';
import './index.css';

const Page = styled.div`
  max-width: ${props => props.theme.pageMaxWidth};
  padding: 0 ${props => props.theme.pageHorizontalPadding};
  margin: auto;
  min-height: calc(100vh - 20.5rem);

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
            title="鼎亜国際貿易"
            meta={[
              {
                name: 'description',
                content:
                  '鼎亜国際貿易は国際物流のプロ集団。国際物流の事なら弊社にご相談ください。',
              },
              { name: 'og:image', content: teiaBadge },
              { name: 'og:site_name', content: '鼎亜国際貿易' },
              {
                name: 'og:description',
                content:
                  '鼎亜国際貿易は国際物流のプロ集団。国際物流の事なら弊社にご相談ください。',
              },
            ]}
          >
            <html lang={displayedLocale} />
          </Helmet>
          <Header />
          <Page>{children()}</Page>
          <Footer />
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
