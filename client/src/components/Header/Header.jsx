// @flow
import React from 'react';
import './Header.css';

import {Navbar} from 'react-materialize';

export default function Header() {
    return(
        <header>
            <div className="my-container">
                <Navbar brand='Font Finder' />
            </div>
        </header>
    )
}