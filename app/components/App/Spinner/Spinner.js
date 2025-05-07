import React, {Component} from 'react';
import styles from './Spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div className={styles.Spinner}>
        <svg
          className={styles.spinner}
          width={this.props.size}
          height={this.props.size}
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.path}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          />
        </svg>
      </div>
    );
  }
}

Spinner.defaultProps = {
  size: '65px'
};

export default Spinner;