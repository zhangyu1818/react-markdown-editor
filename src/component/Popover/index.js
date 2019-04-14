import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import InnerDom from './innerDom';
import classNames from 'classnames';
import styles from './styles.scss';

const Popover = ({ content, className, children }) => {
  const [findDom, setFindDom] = useState(false);
  const [show, setVisible] = useState(false);
  const showStatus = useRef(show);
  const domNode = useRef();
  const containerEle = useRef();
  const createContainer = () => {
    const container = (
      <div ref={containerEle} className={classNames(styles.popover, className)}>
        <CSSTransition
          in={show}
          timeout={200}
          classNames={'popover'}
          onEnter={onPopoverShow}
          onExited={onPopoverHide}
        >
          <div className={styles.popoverContent}>
            <div className={styles.popoverArrow} />
            <div className={styles.popoverInner}>{content}</div>
          </div>
        </CSSTransition>
      </div>
    );
    return createPortal(container, document.body);
  };
  const onPopoverShow = () => {
    const { width, height, left, top } = domNode.current.getBoundingClientRect();
    containerEle.current.style.display = 'block';
    containerEle.current.style.left = `${left + width / 2}px`;
    containerEle.current.style.top = `${top + height}px`;
  };
  const onPopoverHide = () => {
    containerEle.current.style.display = null;
    containerEle.current.style.left = null;
    containerEle.current.style.top = null;
  };
  useEffect(() => {
    if (domNode.current) {
      setFindDom(true);
      domNode.current.addEventListener('click', onClickDom);
      window.addEventListener('click', onClickOther);
    }
    return () => {
      domNode.current.removeEventListener('click', onClickDom);
      window.removeEventListener('click', onClickOther);
    };
  }, []);
  useEffect(() => {
    showStatus.current = show;
  }, [show]);
  const onClickDom = () => {
    setVisible(prev => !prev);
  };
  const onClickOther = ({ target }) => {
    if (!showStatus.current) return;
    if (!domNode.current.contains(target) && !containerEle.current.contains(target)) {
      setVisible(false);
    }
  };
  return (
    <>
      {findDom ? createContainer() : null}
      <InnerDom getNode={node => (domNode.current = node)}>{children}</InnerDom>
    </>
  );
};

export default Popover;
