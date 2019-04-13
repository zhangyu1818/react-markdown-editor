import React from 'react';
import iconSvgMap from './iconSvg';
import classNames from 'classnames';
import styles from './styles.scss';
const Icon = ({ type, title, className, onClick }) => (
  <i title={title} className={classNames(styles.Icon, className)} tabIndex={-1} onClick={onClick}>
    {iconSvgMap[type]}
  </i>
);

export default Icon;
