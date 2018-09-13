import React from 'react';

import styles from './main.scss';


const TabMenuItem = ({ header, onClick }) => (
    <div onClick={onClick}>
      <span>{header}</span>
    </div>
);

export default TabMenuItem;

TabMenuItem.displayName = 'TabMenuItem';
