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
          <a href="mailto:shaotingf@tensormesh.ai">shaotingf@tensormesh.ai</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shaoting. I am a PhD student. I am interested in building systems that can support real-world machine learning workloads. I am also a core member of the <a href="https://github.com/LMCache/LMCache">LMCache</a> team.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? (
            <Link to="/about" className="button">
              About me
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
        &copy; Michael D&apos;Angelo <Link to="https://mldangelo.com./">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
