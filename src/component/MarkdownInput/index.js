import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import codemirror from 'codemirror';
import debounce from 'lodash/debounce';
import styles from './styles.scss';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/continuelist';
import 'codemirror/addon/selection/mark-selection';

import 'codemirror/theme/bespin.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/idea.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/nord.css';
import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/paraiso-light.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/twilight.css';

import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';

const getStr = {
  bold: str => `**${str}**`,
  italic: str => `*${str}*`,
  strikethrough: str => `~~${str}~~`,
  underline: str => `++${str}++`,
  heading1: str => `# ${str}`,
  heading2: str => `## ${str}`,
  heading3: str => `### ${str}`,
  heading4: str => `#### ${str}`,
  heading5: str => `##### ${str}`,
  heading6: str => `###### ${str}`,
  unorderedList: str => `- ${str}`,
  orderedList: str => `1. ${str}`,
  link: str => `[${str}]()`,
  image: str => `![${str}]()`,
  unCompleted: str => `- [ ] ${str}`,
  completed: str => `- [x] ${str}`,
  code: str => `\n\`\`\`\n${str}\n\`\`\``,
  highlight: str => `==${str}==`,
};
const getEmptyOffset = {
  bold: 2,
  italic: 1,
  strikethrough: 2,
  underline: 2,
  link: 1,
  image: 2,
  highlight: 2,
};

const defaultActionTrans = cm => action => {
  if (cm.somethingSelected()) {
    const selections = cm.getSelections();
    const newSelections = selections.map(str => (str !== '' ? getStr[action](str) : str));
    cm.replaceSelections(newSelections);
  } else {
    const pos = cm.getCursor();
    cm.replaceRange(getStr[action](''), pos, pos);
    const offset = getEmptyOffset[action];
    if (offset) cm.setCursor({ ...pos, ch: pos.ch + offset });
  }
  if (action === 'code') {
    cm.execCommand('goLineUp');
    cm.execCommand('goLineEnd');
  }
};

const MarkdownInput = forwardRef(
  ({ onChange, onScroll, scrollPercent, className, style, debounceTime, theme }, ref) => {
    const textAreaRef = useRef();
    const editor = useRef();
    const mouseIn = useRef(false);

    useEffect(() => {
      editor.current = codemirror.fromTextArea(textAreaRef.current, {
        mode: 'text/x-markdown',
        lineNumbers: true,
        highlightFormatting: true,
        matchBrackets: true,
        matchTags: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        autofocus: true,
        extraKeys: {
          Enter: 'newlineAndIndentContinueMarkdownList',
          'Ctrl-B': cm => defaultActionTrans(cm)('bold'),
          'Ctrl-H': cm => defaultActionTrans(cm)('heading2'),
          'Ctrl-K': cm => defaultActionTrans(cm)('link'),
          'Shift-Ctrl-C': cm => defaultActionTrans(cm)('code'),
        },
        scrollbarStyle: 'simple',
        lineWrapping: true,
      });
      editor.current.on(
        'change',
        debounce(() => onChange(editor.current.getValue()), debounceTime)
      );
      editor.current.on('scroll', () => {
        if (!mouseIn.current) return;
        const positionInfo = editor.current.getScrollInfo();
        const height = positionInfo.height - positionInfo.clientHeight;
        const percent = positionInfo.top / height;
        if (onScroll) onScroll(percent);
      });
    }, []);
    useImperativeHandle(
      ref,
      () => ({
        action: action => {
          editor.current.focus();
          switch (action) {
            case 'undo':
              editor.current.undo();
              return;
            case 'redo':
              editor.current.redo();
              return;
            case 'horizontalRule': {
              editor.current.execCommand('goLineEnd');
              if (editor.current.getLine(editor.current.getCursor().line))
                editor.current.execCommand('newlineAndIndent');
              editor.current.execCommand('newlineAndIndent');
              const pos = editor.current.getCursor();
              editor.current.replaceRange('---', pos, pos);
              editor.current.execCommand('newlineAndIndent');
              return;
            }
            case 'table': {
              editor.current.execCommand('goLineEnd');
              if (editor.current.getLine(editor.current.getCursor().line))
                editor.current.execCommand('newlineAndIndent');
              editor.current.execCommand('newlineAndIndent');
              const pos = editor.current.getCursor();
              editor.current.replaceRange(
                `header 1 | header 2
---|---
row 1 col 1 | row 1 col 2
row 2 col 1 | row 2 col 2`,
                pos,
                pos
              );
              editor.current.execCommand('newlineAndIndent');
              return;
            }
            case 'quote': {
              editor.current.execCommand('goLineStart');
              const pos = editor.current.getCursor();
              editor.current.replaceRange('> ', pos, pos);
              editor.current.execCommand('goLineEnd');
              return;
            }
            default: {
              defaultActionTrans(editor.current)(action);
            }
          }
        },
        getValue: () => editor.current.getValue(),
      }),
      []
    );
    useEffect(
      () => {
        if (mouseIn.current) return;
        const positionInfo = editor.current.getScrollInfo();
        const height = positionInfo.height - positionInfo.clientHeight;
        editor.current.scrollTo(0, height * scrollPercent);
      },
      [scrollPercent]
    );
    useEffect(
      () => {
        editor.current.setOption('theme', theme);
      },
      [theme]
    );
    return (
      <div className={className} style={style}>
        <div
          className={styles.markdownInput}
          onMouseEnter={() => {
            mouseIn.current = true;
          }}
          onMouseLeave={() => {
            mouseIn.current = false;
          }}
        >
          <textarea className={styles.markdownTextArea} ref={textAreaRef} />
        </div>
      </div>
    );
  }
);

export default MarkdownInput;
