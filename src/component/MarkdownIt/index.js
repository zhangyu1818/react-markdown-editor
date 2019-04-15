import MarkdownIt from 'markdown-it';
import markdownItMark from 'markdown-it-mark';
import markdownItTaskList from 'markdown-it-task-list';
import markdownItLateX from 'markdown-it-latex';
import markdownItAnchor from 'markdown-it-anchor';
import markdownContainer from 'markdown-it-container';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';
import 'markdown-it-latex/dist/index.css';

console.log(Prism);
const renderContainer = (tokens, idx) => {
  const { info } = tokens[0];
  return tokens[idx].nesting === 1 ? `<div class="alert ${info}">` : `</div>`;
};
const md = new MarkdownIt({
  html: true,
  highlight(code, language) {
    try {
      return `<pre class="language-${language}"><code class="language-${language}">${Prism.highlight(
        code,
        Prism.languages[language],
        language
      )}</code></pre>`;
    } catch (e) {
      return `<pre class="language-${language}"><code class="language-${language}">${code}</code></pre>`;
    }
  },
})
  .use(markdownItMark)
  .use(markdownItTaskList)
  .use(markdownItLateX)
  .use(markdownItAnchor, {
    permalink: true,
    renderPermalink: (slug, opts, state, idx) => {
      const position = {
        false: 'push',
        true: 'unshift',
      };
      const space = () => ({ ...new state.Token('text', '', 0), content: '' });
      const linkTokens = [
        {
          ...new state.Token('link_open', 'a', 1),
          attrs: [
            ['class', opts.permalinkClass],
            ['href', opts.permalinkHref(slug, state)],
            ['aria-hidden', 'true'],
          ],
        },
        { ...new state.Token('inner_open', 'span', 1), attrs: [['class', 'octicon octicon-link']] },
        { ...new state.Token('inner_close', 'span', -1) },
        new state.Token('link_close', 'a', -1),
      ];
      linkTokens[position[!opts.permalinkBefore]](space());
      state.tokens[idx + 1].children[position[opts.permalinkBefore]](...linkTokens);
    },
    permalinkClass: 'anchor',
    permalinkBefore: true,
  })
  .use(markdownContainer, 'success', { render: renderContainer })
  .use(markdownContainer, 'info', { render: renderContainer })
  .use(markdownContainer, 'warning', { render: renderContainer })
  .use(markdownContainer, 'error', { render: renderContainer });
export default md;
