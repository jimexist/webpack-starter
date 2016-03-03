import React, { PropTypes, Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        Hello World!
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home;
