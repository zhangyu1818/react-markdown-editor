# react-markdown-editor

A convenient React.js _markdown editor_ component,Type Markdown on the left and you can preview in real-time on the right panel.

[Demo](http://sbzy.me/markdown)

## Install

`npm install --save react-markdown-mirror`

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown-mirror';

ReactDOM.render(<Markdown />, document.getElementById('root'));
```

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Value</th>
      <th>Discription</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">title</td>
      <td>Boolean</td>
      <td>true or false,default true</td>
      <td>show or hide</td>
    </tr>
     <tr>
      <td>Object</td>
      <td>{visible:Boolean,defaultValue:String,maxLength:Number}</td>
      <td>set title visible, default value and max length</td>
    </tr>
     <tr>
      <td>toolbar</td>
      <td>Boolean</td>
      <td>true or false,default true</td>
      <td>show or hide</td>
    </tr>
    <tr>
    <td>defaultValue</td>
    <td>String</td>
    <td>string</td>
    <td>markdown string value</td>
    </tr>
    <tr>
    <td>onChange</td>
    <td>Function</td>
    <td>value=>{}</td>
    <td>triggered when you input</td>
    </tr>
    <tr>
        <td>debounceTime</td>
        <td>Number</td>
        <td>number(ms),default 500ms</td>
        <td>wait for converting</td>
    </tr>
        <tr>
            <td>extra</td>
            <td>ReactNode</td>
            <td>ReactNode</td>
            <td>operating area, at the end of the line of the Toolbar line</td>
        </tr>
    <tr>
    <td>containerClassName</td>
    <td>String</td>
    <td>string</td>
    <td>the wrapper classname</td>
    </tr>
    <tr>
    <td>inputClassName</td>
    <td>String</td>
    <td>string</td>
    <td>the input area classname</td>
    </tr>
    <tr>
    <td>outputClassName</td>
    <td>String</td>
    <td>string</td>
    <td>the output area classname</td>
    </tr>
  </tbody>
</table>

### Get value

1.use onChange prop,you can do something on this callback

```javascript
<Markdown onChange={value => console.log(value)} />
```

2.use ref

```javascript
const App = () => {
  const markdown = useRef();
  useEffect(() => {
    const value = markdown.current.getValue();
    console.log(value);
  });
  return <Markdown ref={markdown} />;
};
```

### Set value

also use ref

```javascript
const App = () => {
  const markdown = useRef();
  useEffect(() => {
    const defaultTitle = 'default title';
    const defaultMarkdown = '# This is default markdown';
    markdown.current.setValue({ title: defaultTitle, markdown: defaultMarkdown });
  }, []);
  return <Markdown ref={markdown} />;
};
```
