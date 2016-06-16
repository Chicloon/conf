import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class HomePage extends TrackerReact(React.Component) {
  render() {
    return (
      <h1> Hello</h1>
    )
  }
}
