import React, { Component } from 'react';
import MainPagePortfolio from './MainPagePortfolio';
import MainPageAbout from './MainPageAbout';
import MainPageConnect from './MainPageConnect';

class Home extends Component {
    render() {
        return (
            <div className="row home mainRow">
                <MainPagePortfolio />
                <MainPageAbout />
                <MainPageConnect />
            </div>
        );
    }
}

export default Home;