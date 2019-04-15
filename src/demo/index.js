import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Markdown from '@/component/MarkdownComponent';
import './global.css';

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
        defaultValue={'# This is default value'}
        onChange={value => console.log('onChange:=>', value)}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
