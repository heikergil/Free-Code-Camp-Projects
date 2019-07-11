import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div>
       {this.props.text}
      </div>
    );
  }
}

export default Quote;
