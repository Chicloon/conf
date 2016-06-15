import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends Component {
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
    console.log(this);
    Session.set('test2','tste2');
    console.log(Session.get('currentPage'));

  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render(){
    return <span ref="container" />
  }
}
