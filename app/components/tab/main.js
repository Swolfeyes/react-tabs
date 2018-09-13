import React from 'react';

import TabMenuItem from '../tabMenuItem/main.js';

import styles from './main.scss';

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);


class Tab extends React.Component {
    constructor(props) {
        super();
        this.state = {
          currentTabName: props.defaultTab,
        }
    }

    setActiveTab(currentTabName) {
      this.setState({
        currentTabName,
       });
    }

    render() {
    const { children } = this.props;
    const { currentTabName, isActive } = this.state;

    const currentTab = React.Children.toArray(children).filter(child => child.props.name === currentTabName);

    const classes = cx({
      'tab': true,
      'tab--state-active': '',
    })

    return (
      <div className={classes}>
        <div className={styles['tab__navigation']}>
          {React.Children.map(children, (child, i) => (
            <div className={styles['tab__navigation__item']}>
              <TabMenuItem
                  key={i}
                  header={child.props.header}
                  onClick={() => this.setActiveTab(child.props.name)}
              />
            </div>
          ))}
        </div>
        <div className={styles['tab__body']}>
            {currentTab}
        </div>
      </div>
    );
  }
}

export default Tab;

Tab.displayName = 'Tab';
