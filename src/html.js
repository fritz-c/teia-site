import React from 'react';
import PropTypes from 'prop-types';

// This reason for using this custom html.js is apparently to
// add typekit stuff.

function HTML({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) {
  return (
    <html // eslint-disable-line jsx-a11y/html-has-lang
      {...htmlAttributes}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* our custom stuff START */}
        <script src="https://use.typekit.net/fni8ang.js" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: 'try{Typekit.load({ async: true });}catch(e){}',
          }}
        />
        {/* our custom stuff END */}

        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
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
