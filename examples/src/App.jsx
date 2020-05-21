import React, { Component } from "react";

import _ from "lodash";

import App from "../../src";

export default class AppDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };

    this.ref = React.createRef();
  }

  render() {
    const id = "appDemo";

    const ref = this.ref;
    const state = this.state;

    return (
      <div>
        <App ref={ref} id={id} nodeType={"CODE"} nodeId={"CODE_01"} />
      </div>
    );
  }
}
