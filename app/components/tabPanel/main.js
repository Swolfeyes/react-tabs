import React from 'react';

import styles from './main.scss';

const TabPanel = ({ header, body, active }) => {

  return (
    <div className={styles['tabPanel']}>
      <div className={styles['tabPanel__header']}>
        <h1>{header}</h1>
      </div>
      <div className={styles['tabPanel__body']}>
        <span>{body}</span>
      </div>
    </div>
  )
}


export default TabPanel;

TabPanel.displayName = 'TabPanel';
