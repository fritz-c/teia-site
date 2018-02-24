import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import ja from 'react-intl/locale-data/ja';
import { localeData } from '../i18n';

import Header from '../components/header';
import './index.css';

addLocaleData([...ja]);

const TemplateWrapper = ({ children }) => {
  const displayedLocale = 'ja';
  return (
    <IntlProvider
      locale={displayedLocale}
      messages={localeData[displayedLocale]}
      defaultLocale="ja"
    >
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
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
      </Fragment>
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
