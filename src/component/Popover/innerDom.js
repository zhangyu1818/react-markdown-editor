import React from 'react';
import { findDOMNode, createPortal } from 'react-dom';

class InnerDom extends React.Component {
  componentDidMount() {
    const dom = findDOMNode(this);
    const { getNode } = this.props;
    if (dom && getNode) {
      getNode(dom);
    }
  }

  render() {
    return this.props.children;
  }
}
export default InnerDom;
