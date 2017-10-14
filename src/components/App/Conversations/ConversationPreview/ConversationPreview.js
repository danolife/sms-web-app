import React, {Component} from 'react';
import './ConversationPreview.css';

class ConversationPreview extends Component {
  render() {
    const conversation = this.props.conversation;
    return (
      <div className="ConversationPreview">
        <div className="ConversationPreview__avatar">
          lol
        </div>
        <div className="ConversationPreview__name">
          {conversation.recipient}
        </div>
        <div className="ConversationPreview__time">
          12:34
        </div>
      </div>
    );
  }
}

export default ConversationPreview;