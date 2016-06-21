import React, {Component} from 'react';
//
Participants = new Mongo.Collection ("participants");
// Test = new Mongo.Collection ("test");

export default class Registration extends Component {
  constructor() {
    super();
      this.state = {
        subscription: {
          participants: Meteor.subscribe('allAbstracts')
        }
      }
    }

  participants(){
    // console.log(Participants.find().fetch());
    console.log('test');
    // console.log(Participants.find());
    return Participants.find().fetch();
  }

  componentWillMount() {
    console.log('this is willMount');
    console.log('Meteor user', Meteor.user());
    console.log('Participants', this.participants());
    this.state = {
      currentUser: Meteor.user()
    };
    console.log('this state currentUser', this.state.currentUser);
  }
  componentWillUnmount() {
    this.state.subscription.userEmail.stop();
  }


  addAbstract(event){
    event.preventDefault();

    var participant = {
      title : this.refs.title.value,
      authors : this.refs.authors.value,
      section: this.refs.section.value,
      abstract : this.refs.abstract.value,
      organization : this.refs.organization.value,
    };
    // console.log (participant);
    // console.log(Meteor.userId());
    // console.log (Meteor.user().emails[0].address);
    // Participants.insert(participant);
    Meteor.call('addParticipant', participant)
  }


    render() {
      var styles = {
        maxWidth: '90%',
        margin: '0 auto'
      };

      // console.log (this.state.currentUser);
      // console.log(this.participants());
        return (
            <div>
              <div className="grid-block">
                <div className="grid-container" style={styles}>
                  <h1>Registration page</h1>
                  <p>
                    Please fill the registration form
                  </p>
                        <form onSubmit={this.addAbstract.bind(this)}>
                          <label> Abstract title
                            <input ref="title" type="text" placeholder=".medium-6.columns"/>
                          </label>
                            <label> Authors
                                <input ref="authors" type="text" placeholder=".medium-6.columns"/>
                            </label>
                            <label> Organization
                                <input ref="organization" type="text" placeholder="Organization" />
                            </label>
                            <label> Select section
                              <select ref="section">
                                <option value=""></option>
                                <option value="biology">Biology</option>
                                <option value="physics">Physics</option>
                                <option value="chemistry">Chemistry</option>
                              </select>
                            </label>
                            <label> Abstract
                                 <textarea ref="abstract" placeholder="None" rows="10" cols="45"></textarea>
                            </label>

                            <input className="success button" type="submit" placeholder="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
