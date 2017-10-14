import React, {Component} from 'react';
import './ConversationPreview.css';

class ConversationPreview extends Component {
  render() {
    const conversation = this.props.conversation;
    return (
      <div className="ConversationPreview">
        {conversation.recipient}
      </div>
    );
  }
}

export default ConversationPreview;