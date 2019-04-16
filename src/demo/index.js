import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Markdown from '@/component/MarkdownComponent';
import './global.css';

const defaultMarkdown = `# React Markdown Editor

A convenient React.js markdown editor component,Type Markdown on the left and you can preview in real-time on the right panel.

## Keyboard Shortcuts

A full list of keyboard shortcuts

supported：

+ Bold: \`Ctrl + B\`
+ Heading: \`Ctrl + H\`
+ Link: \`Ctrl + K\`
+ Undo: \`Ctrl + Z\`
+ Redo:\`Ctrl + Shift + Z\`
+ Insert code: \`Ctrl + Shift + C\`

## Headings

# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6

## Emphasis

Bold: **bold text**

Italic: *italicized text*

Bold and Italic: This text is ***really important***.

Mark: ==mark==

## Blockquotes

> This is a convenient React.js markdown editor component.

Multiple:

> This is a convenient React.js markdown editor component.
>
> Used Markdown It,Prism.

## List

> Unordered list:

- Text 1
- Text 2
- Text 3

> Ordered list:

1. Text 1
\t1. Text 2
2. Text 3
3. Text 4

> Task list:

- [x] Text 1
\t- [ ] Text 2
\t- [ ] Text 3
- [ ] Text 4

> Definition list:

First Term
: This is one definition of the first term.
: This is another definition of the first term.

## Link and Image


*Link:* [Markdown](https://en.wikipedia.org/wiki/Markdown)

*Image:* 

![Markdown](https://placem.at/places?w=730&h=200&random=4&txt=MarkdownEditor&txtclr=44E3E7EF&overlay_color=B12B2E36&overlay_blend=normal)

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    \`{ my code }\`

    Add as many paragraphs as you like.

## Code

inline \`code\`

code blocks:

\`\`\` jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown-mirror';

ReactDOM.render(<Markdown />,document.getElementById('root'));
\`\`\`

\`\`\`json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

## Table

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

## Emoji :D

:) :") :* :D :o

supports emoticons [shortcuts](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.js) like \`:)\`, \`:-(\`

## Container

:::success
Success
:::

:::info
Info
:::

:::warning
Warning
:::

:::error
Error
:::

# Math

Inline: \`\`$\\sum_{i=1}^\\infty\\frac{1}{n^2}=\\frac{\\pi^2}{6}$\`\`

Blocks:

- katex
\`\`\`katex
f(a,b,c) = (a^2+b^2+c^2)^3
\`\`\`
- asciimath
\`\`\`asciimath
sum_(i=1)^n i^3=((n(n+1))/2)^2
\`\`\``;

const App = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [showToolbar, setShowToolbar] = useState(true);
  const markdown = useRef();
  return (
    <>
      <div style={{ height: 24 }}>
        <button onClick={() => setShowTitle(prev => !prev)}>toggle title</button>
        <button onClick={() => setShowToolbar(prev => !prev)} style={{ margin: '0 10px' }}>
          toggle toolbar
        </button>
        <button onClick={() => console.log('getValue:=>', markdown.current.getValue())}>
          get value(console)
        </button>
      </div>
      <Markdown
        title={showTitle}
        toolbar={showToolbar}
        ref={markdown}
        defaultValue={defaultMarkdown}
        onChange={value => console.log('onChange:=>', value)}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
