import React from 'react';
import Navigation from './Navigation.jsx';

export const MainLayout = ({content}) => (
    <div>
        <link href="http://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet"/>

        <header className="header">
            <h1 className="main-header">Do It Now!</h1>
            <Navigation />
        </header>

        <main>
            {content}
        </main>
    </div>
);
