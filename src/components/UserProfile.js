import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    let imgStyle = {
      'maxHeight': '50px',
      'maxWidth': '50px'
    };

    return (
      <div className="UserProfile">
        {this.props.user ?
          <div>
            <img src={this.props.user.photoURL}
                 alt="profile"
                 style={ imgStyle }
            /><br/>
            {this.props.user.displayName}<br/>
            {this.props.user.email}
          </div>
          :
          <div>You need to login</div>
        }
      </div>
    );
  }
}

export default UserProfile;