import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import CellMine from '../components/Projects/Cell-mine';
import data from '../data/projects';
import myData from '../data/projects-mine';
import pubData from '../data/publications';

const Projects = () => (
  <Main title="Projects" description="Learn about Shaoting Feng's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
        </div>
      </header>
      <h3>Open-source projects that I&apos;m maintaining:</h3>
      {data.map((project) => (
        <CellMine data={project} key={project.title} />
      ))}
      <h3>Past Projects:</h3>
      {myData.map((project) => (
        <CellMine data={project} key={project.title} />
      ))}
      <h3>Publications:</h3>
      {pubData.map((project) => (
        <CellMine data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
