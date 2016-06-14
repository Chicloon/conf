import React from 'react';
import {mount} from 'react-mounter';

import HomePage from './Pages/HomePage.jsx';
import {MainLayout} from './Layouts/MainLayout.jsx';

console.log ("I'm alive");

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<HomePage />)
    });
  }
});
