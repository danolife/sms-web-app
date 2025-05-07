import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null
    };
  }
  fetchContacts() {
    if (this.props.user) {
      let db = firebase.firestore();
      let userId = this.props.user.uid;
      let contactsRef = db
        .collection('users')
        .doc(userId)
        .collection('contacts');
      let contacts = [];
      contactsRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          contacts.push(doc.data());
          this.setState({contacts: contacts});
        });
      }).catch((error) => {
        this.setState({error: error});
      });
    }
  }
  componentWillMount() {
    this.fetchContacts();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.fetchContacts();
    }
  }
  render() {
    return (
      <div className="Contacts">
        Contacts
        { this.state.error ?
          <div>Error: {this.state.error.message}</div>
          :
          ''
        }
        <ul>
          {
            this.state.contacts.map(
              contact => <li key={contact.uniqueId}>{contact.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Contacts;