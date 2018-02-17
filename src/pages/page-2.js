import React from 'react';
import Link from 'gatsby-link';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <form data-netlify name="contact" action="/contact-success">
      <label htmlFor="email">
        Your Email: <input type="email" id="email" name="email" />
      </label>
      <br />
      <label htmlFor="message">
        Message: <input type="text" id="message" name="message" />
      </label>
      <br />
      <button type="submit">Send!</button>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default SecondPage;
