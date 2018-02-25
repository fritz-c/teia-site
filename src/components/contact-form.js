import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Button } from './common';

const FullWidthInput = styled.input`
  width: 100%;
`;
const FullWidthTextarea = styled.textarea`
  width: 100%;
`;

const RequiredText = styled.span.attrs({
  children: <FormattedMessage id="contact.required" />,
})`
  font-size: 0.8rem;
  color: #999;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function showNavigationWarning(e) {
  const confirmationMessage = '送信せずに移動してもよろしいですか。';

  e.returnValue = confirmationMessage;
  return confirmationMessage;
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableWarningOnNavigation = this.enableWarningOnNavigation.bind(this);
    this.disableWarningOnNavigation = this.disableWarningOnNavigation.bind(
      this
    );
  }

  componentWillUnmount() {
    this.disableWarningOnNavigation();
  }

  enableWarningOnNavigation() {
    if (!this.isWarningOnNavigation) {
      global.window.addEventListener('beforeunload', showNavigationWarning);
      this.isWarningOnNavigation = true;
    }
  }

  disableWarningOnNavigation() {
    if (this.isWarningOnNavigation) {
      global.window.removeEventListener('beforeunload', showNavigationWarning);
      this.isWarningOnNavigation = false;
    }
  }

  handleChange(event) {
    this.enableWarningOnNavigation();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.disableWarningOnNavigation();
    axios
      .post('/', encode({ 'form-name': 'contact', ...this.state }))
      .then(() => navigateTo('/thanks/'))
      .catch(err => global.console.error(err));

    event.preventDefault();
  }

  render() {
    return (
      <form
        name="contact-form"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <p hidden>
          <label htmlFor="bot-field">
            <FormattedMessage id="contact.doNotFill" />
            <FullWidthInput
              type="text"
              id="bot-field"
              name="bot-field"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="person-name">
            <FormattedMessage id="contact.name" />
            <RequiredText />
            <br />
            <FullWidthInput
              type="text"
              id="person-name"
              name="person-name"
              required
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="pronunciation">
            <FormattedMessage id="contact.pronunciation" />
            <RequiredText />
            <br />
            <FullWidthInput
              type="text"
              id="pronunciation"
              name="pronunciation"
              required
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="contact-method">
            <FormattedMessage id="contact.contactMethod" />
            <RequiredText />
            <br />
            <FullWidthInput
              type="text"
              id="contact-method"
              name="contact-method"
              required
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            <FormattedMessage id="contact.inquiry" />
            <RequiredText />
            <br />
            <FullWidthTextarea
              id="message"
              name="message"
              required
              rows={6}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <Button type="submit">
            <FormattedMessage id="contact.send" />
          </Button>
        </p>
      </form>
    );
  }
}
