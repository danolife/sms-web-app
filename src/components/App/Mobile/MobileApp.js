import React, {Component} from 'react';
import './MobileApp.css';
import Button from 'material-ui/Button/Button';

class MobileApp extends Component {
  openSmsApp() {
    window.location.href = "sms:";
  }
  render() {
    return (
      <div className="MobileApp">
        <div className="MobileApp__message">
          Looks like you're trying to use SMS7 from a smart phone.
        </div>
        <Button
          raised
          onClick={this.openSmsApp}
        >
          Open your sms app
        </Button>
      </div>
    );
  }
}

export default MobileApp;