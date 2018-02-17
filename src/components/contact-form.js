import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import axios from 'axios';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    axios
      .post('/', encode({ 'form-name': 'contact', ...this.state }))
      .then(() => navigateTo('/thanks/'))
      .catch(err => global.console.error(err));

    event.preventDefault();
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input
              type="text"
              id="bot-field"
              name="bot-field"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your name:<br />
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your email:<br />
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:<br />
            <textarea
              id="message"
              name="message"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}
