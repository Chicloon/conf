import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './Layouts/MainLayout.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import About from './Pages/About/About.jsx';
import Abstracts from './Pages/Abstracts/Abstracts.jsx';
import Registration from './Pages/Registration/Registration.jsx';

// Session.set('currentPage', 'HomePae');

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<HomePage test={"is-active"} />)
    });
    Session.set('currentPage', 'HomePae');
  }
});


FlowRouter.route('/Registration', {
  action() {
    mount(MainLayout, {
      content: (<Registration currentPage={"is-active"} />)
    });
  }
});

FlowRouter.route('/Abstracts', {
  action() {
    mount(MainLayout, {
      content: (<Abstracts />)
    });
  }
});

FlowRouter.route('/About', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    });
  }
});
