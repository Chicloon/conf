import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './Layouts/MainLayout.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import About from './Pages/About/About.jsx';
import Abstracts from './Pages/Abstracts/Abstracts.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Program from './Pages/Program/Program.jsx';

Session.set('currentPage', 'HomePage');

FlowRouter.route('/', {
  action() {
    Session.set('currentPage', 'HomePage');
    mount(MainLayout, {
      content: (<HomePage test={"is-active"} />)
    });
  }
});

FlowRouter.route('/Registration', {
  action() {
    Session.set('currentPage', 'Registration');
    mount(MainLayout, {
      content: (<Registration currentPage={"Registration"} />)
    });
  }
});

FlowRouter.route('/Abstracts', {
  action() {
    Session.set('currentPage', 'Abstracts');
    mount(MainLayout, {
      content: (<Abstracts />)
    });
  }
});

FlowRouter.route('/Program', {
  action() {
    Session.set('currentPage', 'Program');
    mount(MainLayout, {
      content: (<Program />)
    });
  }
});

FlowRouter.route('/About', {
  action() {
    Session.set('currentPage', 'About');
    mount(MainLayout, {
      content: (<About />)
    });
  }
});
