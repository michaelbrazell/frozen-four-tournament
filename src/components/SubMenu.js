import React, { Component } from "react";

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bracket: this.props.bracketData
    };
  }
  render() {
    return (
      <a href={'#'+this.state.bracket.slug} className="btn btn-secondary">{this.state.bracket.name}</a>
    );
  }
}

export default SubMenu;