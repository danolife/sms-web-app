import React, {Component} from 'react';
import './Conversations.css';
import List, {
  ListItem,
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
    let recipientPhoto = 'https://ih1.redbubble.net/image.240617022.5097/flat,800x800,075,t.u1.jpg';
    let conversations = [
      {
        'id': 1,
        'recipient': 'Jack Daniels',
        'photoURL': recipientPhoto,
      },
      {
        'id': 2,
        'recipient': 'John Doe',
        'photoURL': recipientPhoto,
      },
      {
        'id': 3,
        'recipient': 'James Bond',
        'photoURL': recipientPhoto,
      },
      {
        'id': 4,
        'recipient': 'Jack Daniels',
        'photoURL': recipientPhoto,
      },
      {
        'id': 5,
        'recipient': 'John Doe',
        'photoURL': recipientPhoto,
      },
      {
        'id': 6,
        'recipient': 'James Bond',
        'photoURL': recipientPhoto,
      },
      {
        'id': 7,
        'recipient': 'Jack Daniels',
        'photoURL': recipientPhoto,
      },
      {
        'id': 8,
        'recipient': 'John Doe',
        'photoURL': recipientPhoto,
      },
      {
        'id': 9,
        'recipient': 'James Bond',
        'photoURL': recipientPhoto,
      },
      {
        'id': 10,
        'recipient': 'Jack Daniels',
        'photoURL': recipientPhoto,
      },
      {
        'id': 11,
        'recipient': 'John Doe',
        'photoURL': recipientPhoto,
      },
      {
        'id': 12,
        'recipient': 'James Bond',
        'photoURL': recipientPhoto,
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
                  <div className="Conversations__item-avatar"> {/*.84, .56*/}
                    <Avatar src={conversation.photoURL}/>
                  </div>
                  <div className="Conversations__item-text">
                    <div className="Conversations__item-primary-text">
                      {conversation.recipient}
                    </div>
                    <div className="Conversations__item-secondary-text">
                      Ceci est le dernier message et il est plutôt long donc j'espère qu'il sera bien coupé comme il faut pour pas qu'il dépasse n'importe comment
                    </div>
                  </div>
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