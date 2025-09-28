import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={url}>{name}</a> - {position}
      </h4>
      <p className="daterange">
        {' '}
        {dayjs(startDate).format('MMMM YYYY')} -{' '}
        {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </p>
    </header>

    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: { className: 'summary' },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}

    {highlights ? (
      <ul className="points">
        {highlights.map((h) => {
          const isSub = (typeof h === 'object' && h !== null && ('sub' in h || h.type === 'sub'));
          const content = typeof h === 'string' ? h : (h?.text ?? h?.sub ?? '');
          // 生成稳定 key：优先用内容字符串；若为空，用岗位+时间拼成的后备键（不使用数组索引）
          const keyBase = content && content.trim().length > 0
            ? content
            : `job-${name}-${position}-${startDate}-${endDate || 'present'}`;

          return (
            <li key={keyBase} style={isSub ? { marginLeft: '2em' } : undefined}>
              <Markdown
                options={{
                  overrides: {
                    p: {
                      props: { className: 'highlight-text' },
                    },
                  },
                }}
              >
                {content}
              </Markdown>
            </li>
          );
        })}
      </ul>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          text: PropTypes.string,
          sub: PropTypes.string,
          type: PropTypes.string,
        }),
      ]),
    ),
  }).isRequired,
};

export default Job;
