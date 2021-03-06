import React, {
  useCallback,
  useRef,
  useState,
  Fragment,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

import classNames from 'classnames';

import Icon from '../Icon';
import Divider from '../Divider';
import MarkdownInput from '../MarkdownInput';
import MarkdownOutput from '../MarkdownOutput';
import Popover from '../Popover';
import markdown from '../../markdown-it';

import styles from './styles.scss';
import '@/global.scss';

const light = ['default', 'eclipse', 'idea', 'mdn-like', 'paraiso-light'];
const dark = [
  'bespin',
  'darcula',
  'cobalt',
  'duotone-dark',
  'icecoder',
  'mbo',
  'midnight',
  'monokai',
  'nord',
  'paraiso-dark',
  'tomorrow-night-eighties',
  'twilight',
];
const themeList = [
  {
    type: 'Bright',
    list: light,
  },
  {
    type: 'Dark',
    list: dark,
  },
];

const Markdown = forwardRef(
  (
    {
      containerClassName,
      inputClassName,
      outputClassName,
      title = { visible: true },
      toolbar = true,
      debounceTime = 500,
      onChange,
      defaultValue,
      extra = false,
    },
    ref
  ) => {
    const [scroll, setScroll] = useState(0);
    const [titleValue, changeTitleValue] = useState(title.defaultValue || '');
    const titleInput = useRef();
    const [showView, setShowView] = useState(true);
    const [light, setLight] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem('markdown-theme') || 'default');
    const [toolbarToggle, setToolbarToggle] = useState(false);
    const outputAreaRef = useRef();
    const inputAreaRef = useRef();
    const titleValueRef = useRef();
    // markdown input change
    const onInputChange = useCallback(value => {
      if (!outputAreaRef.current) return;
      outputAreaRef.current.innerHTML = markdown.render(value);
      onMarkdownValueChange();
    }, []);
    // default value change
    useEffect(() => {
      if (defaultValue) setMarkdownValue(defaultValue);
    }, [defaultValue]);
    // title value change
    useEffect(() => {
      titleValueRef.current = titleValue;
      onMarkdownValueChange();
    }, [titleValue]);
    // markdown editor ref
    useImperativeHandle(
      ref,
      () => ({
        getValue: getMarkdownValue,
        setValue: setMarkdownValue,
      }),
      []
    );
    // on title change,set title state value
    const onTitleChange = e => {
      const value = e.target.value;
      if (
        title.maxLength &&
        value.length > title.maxLength &&
        value.length > titleValueRef.current.length
      )
        return;
      changeTitleValue(value);
    };
    // set title and markdown value
    const setMarkdownValue = ({ title, markdown }) => {
      if (title !== undefined) changeTitleValue(title);
      if (markdown !== undefined) inputAreaRef.current.setValue(markdown);
    };
    // get value
    const getMarkdownValue = () => {
      const markdown = inputAreaRef.current.getValue();
      const html = outputAreaRef.current.innerHTML;
      const title = titleValueRef.current;
      return { title, markdown, html };
    };
    // on markdown value change,trigger onChange prop
    const onMarkdownValueChange = () => {
      const value = getMarkdownValue();
      if (onChange) {
        onChange(value);
      }
    };
    // click toolbar icon
    const onClickToolBar = action => () => {
      inputAreaRef.current.action(action);
    };
    // theme list render
    const themeListRender = dataSource =>
      dataSource.map(item => (
        <Fragment key={item.type}>
          <div className={styles.themeType}>{item.type}</div>
          <dl className={styles.themeList}>
            {item.list.map(listItem => (
              <dd
                key={listItem}
                title={listItem}
                className={theme === listItem ? styles.active : null}
                onClick={() => {
                  localStorage.setItem('markdown-theme', listItem);
                  setTheme(listItem);
                }}
              >
                {listItem}
              </dd>
            ))}
          </dl>
        </Fragment>
      ));
    return (
      <div
        className={classNames(
          styles.markdown,
          light ? styles.light : styles.dark,
          containerClassName
        )}
      >
        {title === true || title.visible ? (
          <div className={styles.title}>
            <input
              className={styles.titleName}
              placeholder={title.placeholder || 'Input title...'}
              value={titleValue}
              onChange={onTitleChange}
              ref={titleInput}
            />
          </div>
        ) : null}
        {toolbar ? (
          <>
            <div className={styles.toolbar} style={{ display: toolbarToggle ? 'none' : null }}>
              <div className={styles.icons}>
                <Icon
                  className={styles.actionIcon}
                  type="undo"
                  title="Undo"
                  onClick={onClickToolBar('undo')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="redo"
                  title="Redo"
                  onClick={onClickToolBar('redo')}
                />
                <Divider />
                <Icon
                  className={styles.actionIcon}
                  type="bold"
                  title="Bold"
                  onClick={onClickToolBar('bold')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="italic"
                  title="Italic"
                  onClick={onClickToolBar('italic')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="strikethrough"
                  title="Strikethrough"
                  onClick={onClickToolBar('strikethrough')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="underline"
                  title="Underline"
                  onClick={onClickToolBar('underline')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="highlight"
                  title="Mark"
                  onClick={onClickToolBar('highlight')}
                />
                <Divider />
                <i
                  className={styles.actionIcon}
                  title="Heading 1"
                  onClick={onClickToolBar('heading1')}
                >
                  h1
                </i>
                <i
                  className={styles.actionIcon}
                  title="Heading 2"
                  onClick={onClickToolBar('heading2')}
                >
                  h2
                </i>
                <i
                  className={styles.actionIcon}
                  title="Heading 3"
                  onClick={onClickToolBar('heading3')}
                >
                  h3
                </i>
                <i
                  className={styles.actionIcon}
                  title="Heading 4"
                  onClick={onClickToolBar('heading4')}
                >
                  h4
                </i>
                <i
                  className={styles.actionIcon}
                  title="Heading 5"
                  onClick={onClickToolBar('heading5')}
                >
                  h5
                </i>
                <i
                  className={styles.actionIcon}
                  title="Heading 6"
                  onClick={onClickToolBar('heading6')}
                >
                  h6
                </i>
                <Divider />
                <Icon
                  className={styles.actionIcon}
                  type="horizontalRule"
                  title="Horizontal rule"
                  onClick={onClickToolBar('horizontalRule')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="quote"
                  title="Quote"
                  onClick={onClickToolBar('quote')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="unorderedList"
                  title="Unordered list"
                  onClick={onClickToolBar('unorderedList')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="orderedList"
                  title="Ordered list"
                  onClick={onClickToolBar('orderedList')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="incompleteTaskList"
                  title="Incomplete task list"
                  onClick={onClickToolBar('unCompleted')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="completeTaskList"
                  title="Complete task list"
                  onClick={onClickToolBar('completed')}
                />
                <Divider />
                <Icon
                  className={styles.actionIcon}
                  type="code"
                  title="Code"
                  onClick={onClickToolBar('code')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="table"
                  title="Table"
                  onClick={onClickToolBar('table')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="math"
                  title="Mathematical formula"
                  onClick={onClickToolBar('math')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="link"
                  title="Link"
                  onClick={onClickToolBar('link')}
                />
                <Icon
                  className={styles.actionIcon}
                  type="image"
                  title="Image"
                  onClick={onClickToolBar('image')}
                />
                <Divider />
                <Icon
                  className={styles.actionIcon}
                  type={showView ? 'unWatch' : 'watch'}
                  title={showView ? 'UnWatch' : 'Watch'}
                  onClick={() => setShowView(prevState => !prevState)}
                />
                <Popover className={styles.themeListWrapper} content={themeListRender(themeList)}>
                  <Icon className={styles.actionIcon} type="theme" title="Theme" />
                </Popover>
                <Icon
                  className={styles.actionIcon}
                  type={!light ? 'light' : 'dark'}
                  title={!light ? 'Light' : 'Dark'}
                  onClick={() => setLight(prevState => !prevState)}
                />
              </div>
              {extra ? <div className={styles.extra}>{extra}</div> : null}
            </div>
            <div className={styles.toolbarToggle} onClick={() => setToolbarToggle(prev => !prev)} />
          </>
        ) : null}
        <div className={styles.content}>
          <div className={styles.writeContainer}>
            <MarkdownInput
              style={{ width: !showView ? '100%' : null }}
              ref={inputAreaRef}
              className={classNames(styles.inputAreaWrapper, inputClassName)}
              onChange={onInputChange}
              scrollPercent={scroll}
              onScroll={setScroll}
              debounceTime={debounceTime}
              theme={theme}
              defaultValue={defaultValue}
            />
            <MarkdownOutput
              showView={showView}
              className={classNames(styles.outputAreaWrapper, outputClassName)}
              ref={outputAreaRef}
              scrollPercent={scroll}
              onScroll={setScroll}
            />
          </div>
        </div>
      </div>
    );
  }
);
export default Markdown;
