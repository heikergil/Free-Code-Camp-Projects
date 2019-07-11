import React, { Component } from 'react';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
            
    }
  }
    
  render() {
          
    return (
      <div>
      <Editor />
      <Previewer />
      </div>
      
    );
  }
  }

export default App;
