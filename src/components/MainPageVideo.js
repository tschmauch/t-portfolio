import React from 'react';
import CreateReactClass from 'create-react-class';
import { Link } from 'react-router-dom'
// import axios from 'axios';

var MainPageVideo = CreateReactClass({
  getInitialState: function () {
    return {
      hover: false
    };
  },
  hoverOn: function () {
    this.setState({ hover: true });
  },
  hoverOff: function () {
    this.setState({ hover: false });
  },
  // async componentDidMount() {
  //   const { match: { params } } = this.props;
  //   const hover = (await axios.get(`http://localhost:8081/${params.questionId}`)).data;
  //   this.setState({
  //     hover,
  //   });
  // }
  render: function () {
    return (
      <div
        id="mainPageVideo"
        className={ this.state.hover ? "hovering mainPage col-sm-4 col-xs-12" : "notHovering mainPage col-sm-4 col-xs-12" }
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}>
        <Link to="/video" >
          <h2>VIDEO</h2>
        </Link>
      </div>

    )
  }
})

export default MainPageVideo;