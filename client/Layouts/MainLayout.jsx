import React from 'react';
import Navigation from './Navigation.jsx';

export const MainLayout = ({content}) => (
    <div>
      <header className="header">
      <h1 className="main-header">Do It Now!</h1>
        <Navigation />
      </header>

      <main>
          {content}
      </main>
    </div>
);
