import React from 'react';

import Tab from '../tab/main.js';
import TabPanel from '../tabPanel/main.js';


import styles from './main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={styles['app']}>
        <Tab defaultTab='home'>
          <TabPanel
            name="home"
            header="Home"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <TabPanel
            name="blog"
            header="Blog"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <TabPanel
            name="contact"
            header="Contact"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Tab>
      </div>
    )
  }
}

export default App;

App.displayName = 'App';
