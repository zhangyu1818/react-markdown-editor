import React, { useCallback, useRef, useState, Fragment } from "react";

import classNames from "classnames";
import Marked from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Icon, Divider, Popover } from "antd";
import MarkdownInput from "../MarkdownInput";
import MarkdownOutput from "../MarkdownOutput";
import styles from "./styles.scss";
import "@/github-markdown.css";

const light = ["default", "eclipse", "idea", "mdn-like", "paraiso-light"];
const dark = [
  "bespin",
  "darcula",
  "cobalt",
  "duotone-dark",
  "icecoder",
  "mbo",
  "midnight",
  "monokai",
  "nord",
  "paraiso-dark",
  "tomorrow-night-eighties",
  "twilight"
];
const themeList = [
  {
    type: "Bright",
    list: light
  },
  {
    type: "Dark",
    list: dark
  }
];

const CustomIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1007533_78af8ffle8i.js"
});
const Markdown = ({
  containerClassName,
  inputClassName,
  outputClassName,
  title = true,
  toolbar = true,
  debounceTime = 500,
  onChange
}) => {
  const [scroll, setScroll] = useState(0);
  const [titleValue, changeTitleValue] = useState(title.defaultValue || "");
  const titleInput = useRef();
  const [showView, setShowView] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("markdown-theme") || "default"
  );
  const [toolbarToggle, setToolbarToggle] = useState(false);
  const outputAreaRef = useRef();
  const inputAreaRef = useRef();
  const onInputChange = useCallback(value => {
    outputAreaRef.current.innerHTML = Marked(value);
    outputAreaRef.current.querySelectorAll("pre code").forEach(block => {
      Prism.highlightElement(block);
    });
    getMarkdownValue();
  }, []);
  const onTitleChange = e => {
    const value = e.target.value;
    if (title.maxLength && value.length > title.maxLength) return;
    changeTitleValue(value);
    getMarkdownValue();
  };
  const getMarkdownValue = () => {
    const markdown = inputAreaRef.current.getValue();
    const html = outputAreaRef.current.innerHTML;
    const title = titleInput.current ? titleInput.current.value : "";
    if (onChange) {
      onChange({ title, markdown, html });
    }
  };
  const onClickToolBar = action => () => {
    inputAreaRef.current.action(action);
  };
  const ThemeListRender = dataSource =>
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
                localStorage.setItem("markdown-theme", listItem);
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
    <div className={styles.markdown}>
      {title ? (
        <div className={styles.title}>
          <input
            className={styles.titleName}
            placeholder={title.placeholder || "输入文章标题..."}
            value={titleValue}
            onChange={onTitleChange}
            ref={titleInput}
          />
        </div>
      ) : null}
      {toolbar ? (
        <>
          <div
            className={styles.toolbar}
            style={{ display: toolbarToggle ? "none" : null }}
          >
            <Icon
              shape="circle"
              className={styles.actionIcon}
              type="undo"
              title="Undo"
              onClick={onClickToolBar("undo")}
            />
            <Icon
              className={styles.actionIcon}
              type="redo"
              title="Redo"
              onClick={onClickToolBar("redo")}
            />
            <Divider type="vertical" />
            <Icon
              className={styles.actionIcon}
              type="bold"
              title="Bold"
              onClick={onClickToolBar("bold")}
            />
            <Icon
              className={styles.actionIcon}
              type="italic"
              title="Italic"
              onClick={onClickToolBar("italic")}
            />
            <Icon
              className={styles.actionIcon}
              type="strikethrough"
              title="Strikethrough"
              onClick={onClickToolBar("strikethrough")}
            />
            <Icon
              className={styles.actionIcon}
              type="underline"
              title="Underline"
              onClick={onClickToolBar("underline")}
            />
            <Icon
              className={styles.actionIcon}
              type="highlight"
              title="Mark"
              onClick={onClickToolBar("highlight")}
            />
            <Divider type="vertical" />
            <i
              className={styles.actionIcon}
              title="Heading 1"
              onClick={onClickToolBar("heading1")}
            >
              h1
            </i>
            <i
              className={styles.actionIcon}
              title="Heading 2"
              onClick={onClickToolBar("heading2")}
            >
              h2
            </i>
            <i
              className={styles.actionIcon}
              title="Heading 3"
              onClick={onClickToolBar("heading3")}
            >
              h3
            </i>
            <i
              className={styles.actionIcon}
              title="Heading 4"
              onClick={onClickToolBar("heading4")}
            >
              h4
            </i>
            <i
              className={styles.actionIcon}
              title="Heading 5"
              onClick={onClickToolBar("heading5")}
            >
              h5
            </i>
            <i
              className={styles.actionIcon}
              title="Heading 6"
              onClick={onClickToolBar("heading6")}
            >
              h6
            </i>
            <Divider type="vertical" />
            <Icon
              className={styles.actionIcon}
              type="minus"
              title="Horizontal rule"
              onClick={onClickToolBar("horizontalRule")}
            />{" "}
            <CustomIcon
              className={styles.actionIcon}
              type="icon-quote"
              title="Quote"
              onClick={onClickToolBar("quote")}
            />
            <Icon
              className={styles.actionIcon}
              type="bars"
              title="Unordered list"
              onClick={onClickToolBar("unorderedList")}
            />
            <Icon
              className={styles.actionIcon}
              type="ordered-list"
              title="Ordered list"
              onClick={onClickToolBar("orderedList")}
            />
            <Icon
              className={styles.actionIcon}
              type="border"
              title="Incomplete task list"
              onClick={onClickToolBar("unCompleted")}
            />
            <Icon
              className={styles.actionIcon}
              type="check-square"
              title="Complete task list"
              onClick={onClickToolBar("completed")}
            />
            <Divider type="vertical" />
            <Icon
              className={styles.actionIcon}
              type="code"
              title="Code"
              onClick={onClickToolBar("code")}
            />
            <Icon
              className={styles.actionIcon}
              type="table"
              title="Table"
              onClick={onClickToolBar("table")}
            />
            <Icon
              className={styles.actionIcon}
              type="link"
              title="Link"
              onClick={onClickToolBar("link")}
            />
            <Icon
              className={styles.actionIcon}
              type="picture"
              title="Image"
              onClick={onClickToolBar("image")}
            />
            <Divider type="vertical" />
            <Icon
              className={styles.actionIcon}
              type={showView ? "eye-invisible" : "eye"}
              title={showView ? "UnWatch" : "Watch"}
              onClick={() => setShowView(prevState => !prevState)}
            />
            <Popover
              overlayClassName={styles.themeListWrapper}
              placement="bottom"
              trigger="click"
              content={ThemeListRender(themeList)}
            >
              <Icon className={styles.actionIcon} type="skin" title="Theme" />
            </Popover>
          </div>
          <div
            className={styles.toolbarToggle}
            onClick={() => setToolbarToggle(prev => !prev)}
          />
        </>
      ) : null}
      <div className={styles.content}>
        <div className={classNames(styles.writeContainer, containerClassName)}>
          <MarkdownInput
            style={{ width: !showView ? "100%" : null }}
            ref={inputAreaRef}
            className={classNames(styles.inputAreaWrapper, inputClassName)}
            onChange={onInputChange}
            scrollPercent={scroll}
            onScroll={setScroll}
            debounceTime={debounceTime}
            theme={theme}
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
};
export default Markdown;
