import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Publications from '../components/Resume/Publications';
import Presentations from '../components/Resume/Presentations';
import Awards from '../components/Resume/Awards';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import pubs from '../data/resume/pubs';
import pre from '../data/resume/pre';
import awards from '../data/resume/awards';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Publications: () => <Publications data={pubs} />,
  Presentations: () => <Presentations data={pre} />,
  Experience: () => <Experience data={work} />,
  Awards: () => <Awards data={awards} />,
};

const Resume = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []);

  return (
    <Main
      title="Resume"
      description="Shaoting Feng's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
    >
      {/* 关键修改 1：添加 'markdown' class 继承原有的段落字体和排版 */}
      <article className="post markdown" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link to="/resume">About me</Link>
            </h2>
          </div>
        </header>

        <div style={{ marginTop: '-1em', marginBottom: '2em' }}>
          <Markdown>{markdown}</Markdown>
        </div>

        {/* 简历的各个具体 Section */}
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </article>
    </Main>
  );
};

export default Resume;
