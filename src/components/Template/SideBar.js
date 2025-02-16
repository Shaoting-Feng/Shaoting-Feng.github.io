import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import LastUpdated from '../../LastUpdated';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shaoting Feng</h2>
        <p>
          <a href="mailto:shaotingf@uchicago.edu">shaotingf@uchicago.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shaoting. My research interests lie in systems for large language models (LLMs) and computer networking. I am fortunate to be advised by Prof.{' '}<a href="https://people.cs.uchicago.edu/~junchenj/">Junchen Jiang</a> at the University of Chicago.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/projects" className="button">
              Selected Projects
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <LastUpdated />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
