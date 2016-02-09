import * as React from 'react';
import { Component, PropTypes } from 'react';
import styles from './App.css';

class App extends Component<any, any> {

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
