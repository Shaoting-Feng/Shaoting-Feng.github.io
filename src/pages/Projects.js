import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import CellMine from '../components/Projects/Cell-mine';

import data from '../data/projects';
import myData from '../data/projects-mine';
import pubData from '../data/publications';

const sections = {
  Research: () => (
    <>
      <div className="link-to" id="research" />
      <h3>Publications:</h3>
      <div className="cells-list">
        {pubData.map((project) => (
          <CellMine data={project} key={project.title} />
        ))}
      </div>
    </>
  ),
  'Open-Source': () => (
    <>
      <div className="link-to" id="open-source" />
      <h3>Open-source projects that I&apos;m maintaining:</h3>
      <div className="cells-list">
        {data.map((project) => (
          <CellMine data={project} key={project.title} />
        ))}
      </div>
    </>
  ),
  Projects: () => (
    <>
      <div className="link-to" id="projects" />
      <h3>Past Projects:</h3>
      <div className="cells-list">
        {myData.map((project) => (
          <CellMine data={project} key={project.title} />
        ))}
      </div>
    </>
  ),
};

const Projects = () => (
  <Main title="Projects" description="Learn about Shaoting Feng's projects.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Projects;
