import React from 'react';
// import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
    <div>
        <div className="row">
            <div className="small-6 columns">6 columns</div>
            <div className="small-6 columns">6 columns</div>
        </div>
        <div className="row">
            <div className="medium-6 large-4 columns">12/6/4 columns</div>
            <div className="medium-6 large-8 columns">12/6/8 columns</div>
        </div>
        <h1>Hello World</h1>

        <main>
            {content}
        </main>
    </div>
);
