import React from 'react';
import './Main.css';

import CardDisplayContainer from './../CardDisplayContainer/CardDisplayContainer';
import Sidebar from './../Sidebar/Sidebar';

type Props = {}

export default function Main (props:Props) {
    return(
        <main>
            <div className="my-container">
                <CardDisplayContainer />
                <Sidebar />
            </div>
        </main>
    )
}