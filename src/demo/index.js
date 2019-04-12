import React from "react";
import ReactDOM from "react-dom";
import Markdown from "@/component/MarkdownComponent";
import "./global.css";

ReactDOM.render(
  <Markdown onChange={value => console.log(value)} />,
  document.getElementById("root")
);
