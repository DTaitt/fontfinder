import React, { Component } from 'react';
import axios from 'axios';

import CardDisplay from './CardDisplay';

export default class Main extends Component {

    state = {
        fontsData:[],
        isFontsDataLoaded: false,
    }

    componentDidMount() {
        this.fetchFontsData('popularity');
    }

    async fetchFontsData(sortType) {
        let res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${sortType}&key= AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4`)
        console.log(res.data.items)
        this.setState({
            fontsData: res.data.items.slice(99),
            isFontsDataLoaded: true,
        })
    }

    render() {
        return(
            <main>
                <div className="container">
                    {
                        this.state.isFontsDataLoaded === true
                        ? <CardDisplay />
                        : null
                    }
                </div>
            </main>
        )
    }
}