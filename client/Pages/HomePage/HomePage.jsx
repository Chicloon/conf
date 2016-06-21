import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class HomePage extends TrackerReact(React.Component) {
  render() {
    console.log('HomePage');
    return (
      <h1> Hello</h1>
    )
  }
}
