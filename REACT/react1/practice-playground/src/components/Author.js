import React, * as react from 'react';

class Author extends react.Component {
  render() {
    return (
      <div>
       {this.props.text}
      </div>
    );
  }
}

export default Author;