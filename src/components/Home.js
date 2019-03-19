import React, { Component } from 'react';
import MainPageVideo from './MainPageVideo';
import MainPageAbout from './MainPageAbout';
import MainPagePhoto from './MainPagePhoto';

class Home extends Component {
    render() {
        return (
            <div className="row home mainRow">
                <MainPageVideo />
                <MainPageAbout />
                <MainPagePhoto />
            </div>
        );
    }
}

export default Home;