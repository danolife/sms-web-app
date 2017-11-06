import React, {Component} from 'react';
import './Menu.css';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import DropDown, { MenuItem as DropDownItem } from 'material-ui/Menu';
import firebase from 'firebase';
import 'firebase/auth';
import Avatar from '../Avatar/Avatar';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false
    };
    this.openDropDown = this.openDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.logout = this.logout.bind(this);
  }
  openDropDown(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }
  closeDropDown() {
    this.setState({ open: false });
  }
  logout() {
    this.closeDropDown();
    firebase.auth().signOut().then(() => {
      this.props.setUser(null);
    });
  }
  render() {
    return (
      <div className="Menu">
        <Avatar src={this.props.user.photoURL}/>
        <h1 className="Menu__title">
          SMS7
        </h1>
        <IconButton
          color="contrast"
          onClick={this.openDropDown}
        >
          <MoreVertIcon/>
        </IconButton>
        <DropDown
          id="menu-more"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.closeDropDown}
        >
          <DropDownItem
            onClick={this.logout}>
            Logout
          </DropDownItem>
        </DropDown>
      </div>
    );
  }
}

export default Menu;