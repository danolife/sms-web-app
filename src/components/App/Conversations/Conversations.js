import React, {Component} from 'react';
import './Conversations.css';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from '../Avatar/Avatar';

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
    this.getConversations = this.getConversations.bind(this);
  }
  componentWillMount() {
    this.getConversations();
  }
  getConversations () {
    let conversations = [
      {
        'id': 1,
        'recipient': 'Jack Daniels',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 2,
        'recipient': 'John Doe',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 3,
        'recipient': 'James Bond',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 4,
        'recipient': 'Jack Daniels',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 5,
        'recipient': 'John Doe',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 6,
        'recipient': 'James Bond',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 7,
        'recipient': 'Jack Daniels',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 8,
        'recipient': 'John Doe',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 9,
        'recipient': 'James Bond',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 10,
        'recipient': 'Jack Daniels',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 11,
        'recipient': 'John Doe',
        'photoURL': this.props.user.photoURL,
      },
      {
        'id': 12,
        'recipient': 'James Bond',
        'photoURL': this.props.user.photoURL,
      },
    ];
    this.setState({conversations: conversations});
  }
  render() {
    return (
      <div className="Conversations">
        <List
          disablePadding
        >
          {
            this.state.conversations.map(function(conversation) {
              return (
                <ListItem
                  button
                  divider
                  key={conversation.id}
                >
                  <ListItemAvatar>
                    <Avatar src={conversation.photoURL}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary="Secondary text"
                  />
                </ListItem>
              );
            })
          }
        </List>
      </div>
    );
  }
}

export default Conversations;