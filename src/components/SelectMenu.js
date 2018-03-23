import React, { Component } from "react";

class SubMenuSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bracket: this.props.bracketData
    };
  }
  render() {
    return (
      <a className="dropdown-item" href={'#' + this.state.bracket.slug}>{this.state.bracket.name}</a>
    );
  }
}

export default SubMenuSmall;