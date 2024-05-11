import React, { Component } from "react";

export default class SolidityImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
        {/* <!-- Solidity S --> */}
        <path fill="#343434" d="M4.1,0h15.8C20.3,0,21,0.7,21,1.6v20.8c0,0.9-0.7,1.6-1.6,1.6H4.1c-0.9,0-1.6-0.7-1.6-1.6V1.6C2.5,0.7,3.2,0,4.1,0z M19,21c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V3h14V21z"/>
        {/* <!-- Solidity Diamond --> */}
        <polygon fill="#343434" points="12,1.9 16.5,7.5 12,13.1 7.5,7.5 "/>
        {/* <!-- Solidity Dot --> */}
        <circle fill="#343434" cx="12" cy="16" r="1"/>
        </svg>

    );
  }
}
