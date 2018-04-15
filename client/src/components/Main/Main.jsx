import React from 'react';
import './Main.css';

import CardDisplayContainer from './../CardDisplayContainer';
import Sidebar from './../Sidebar/Sidebar';
import store from './../../redux/store';

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