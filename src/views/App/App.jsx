import React, { Component, PropTypes } from 'react';
import styles from './App.css';

class App extends Component {

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
