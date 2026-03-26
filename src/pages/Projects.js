import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import CellMine from '../components/Projects/Cell-mine';

import data from '../data/projects';

const formatStars = (count) => {
  if (count >= 1000) {
    const compact = (count / 1000).toFixed(1).replace(/\.0$/, '');
    return `Star ${compact}k`;
  }

  return `Star ${count}`;
};

const Projects = () => {
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    const fetchStars = async () => {
      const updates = await Promise.all(
        data
          .filter((project) => project.githubRepo)
          .map(async (project) => {
            try {
              const res = await fetch(`https://api.github.com/repos/${project.githubRepo}`);
              if (!res.ok) return null;
              const repoData = await res.json();
              if (typeof repoData.stargazers_count !== 'number') return null;

              return {
                title: project.title,
                subtitle: formatStars(repoData.stargazers_count),
              };
            } catch (error) {
              return null;
            }
          }),
      );

      const updatesByTitle = new Map(
        updates.filter(Boolean).map((entry) => [entry.title, entry.subtitle]),
      );

      if (updatesByTitle.size === 0) return;

      setProjects((prev) => prev.map((project) => (
        updatesByTitle.has(project.title)
          ? { ...project, subtitle: updatesByTitle.get(project.title) }
          : project
      )));
    };

    fetchStars();
  }, []);

  return (
    <Main title="Projects" description="Learn about Shaoting Feng's projects.">
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
          </div>
        </header>
        <div className="cells-list">
          {projects.map((project) => (
            <CellMine data={project} key={project.title} />
          ))}
        </div>
      </article>
    </Main>
  );
};

export default Projects;
