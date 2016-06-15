import React from 'react';
import Navigation from './Navigation.jsx';

export const MainLayout = ({content}) => (
    <div>
        <link href="http://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet"/>

        <header className="header">
            <h1 className="main-header">Do It Now!</h1>
            <ul className="header-subnav">
                <li>
                    <a href="#" className="is-active">Home</a>
                </li>
                <li>
                    <a href="#" className> Register {Session.get('currentPage')}</a>
                </li>
                <li>
                    <a href="#" >Abstracts</a>
                </li>
                <li>
                  <a href="#" >Program</a>
                </li>
                <li>
                    <a href="#" >About</a>
                </li>
            </ul>
            <Navigation />
        </header>

        <main>
            {content}
        </main>
    </div>
);
