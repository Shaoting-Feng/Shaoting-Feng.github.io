import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Misc"
    description="Some statistics about Shaoting Feng and mldangelo.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Misc</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Markdown>I enjoy [musicals and plays](https://www.theaterdiary.com/user/self/?id=kNF9OOnAfR), [hiking](https://www.alltrails.com/en/members/shaoting-feng?utm_campaign=mobile-iphone&sh=idkjan), and exploring museums. Follow me on [Instagram](https://www.instagram.com/shoatech/)!</Markdown>
      <br />
      <Markdown>I play saxophone, mostly jazz. I like playing songs by Kaori Kobayashi and Dave Koz.</Markdown>
      <br />
      <Markdown>I also hope to get myself ready for the [memory contest](https://memoryleague.com/?utm_source=chatgpt.com#!/home) and [spartan race](https://www.spartan.com/en/race/sprint) in the future.</Markdown>
      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
