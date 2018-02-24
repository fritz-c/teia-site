import React, { Component } from 'react';
import PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class HTML extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html // eslint-disable-line jsx-a11y/html-has-lang
        {...this.props.htmlAttributes}
      >
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          <script />
          <script src="https://use.typekit.net/fni8ang.js" />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: 'try{Typekit.load({ async: true });}catch(e){}',
            }}
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.defaultProps = {
  bodyAttributes: {},
  htmlAttributes: {},
};

HTML.propTypes = {
  body: PropTypes.string.isRequired,
  htmlAttributes: PropTypes.shape({}),
  bodyAttributes: PropTypes.shape({}),
  headComponents: PropTypes.node.isRequired,
  preBodyComponents: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

export default HTML;
