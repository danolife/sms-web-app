import React, {Component} from 'react';
import './Conversations.css';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

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
        'recipient': 'Jack Daniels'
      },
      {
        'id': 2,
        'recipient': 'John Doe'
      },
      {
        'id': 3,
        'recipient': 'James Bond'
      },
      {
        'id': 4,
        'recipient': 'Jack Daniels'
      },
      {
        'id': 5,
        'recipient': 'John Doe'
      },
      {
        'id': 6,
        'recipient': 'James Bond'
      },
      {
        'id': 7,
        'recipient': 'Jack Daniels'
      },
      {
        'id': 8,
        'recipient': 'John Doe'
      },
      {
        'id': 9,
        'recipient': 'James Bond'
      },
      {
        'id': 10,
        'recipient': 'Jack Daniels'
      },
      {
        'id': 11,
        'recipient': 'John Doe'
      },
      {
        'id': 12,
        'recipient': 'James Bond'
      },
    ];
    this.setState({conversations: conversations});
  }
  render() {
    return (
      <div className="Conversations">
        <List>
          {
            this.state.conversations.map(function(conversation) {
              return (
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
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