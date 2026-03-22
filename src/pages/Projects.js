import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import CellMine from '../components/Projects/Cell-mine';

import data from '../data/projects';

const sections = {
  'Open-Source': () => (
    <>
      <div className="cells-list">
        {data.map((project) => (
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
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Projects;
