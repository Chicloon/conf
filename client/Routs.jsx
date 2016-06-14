import React from 'react';
import {mount} from 'react-mounter';

import HomePage from './Pages/HomePage.jsx';
import {MainLayout} from './Layouts/MainLayout.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<HomePage />)
    });
  }
});
