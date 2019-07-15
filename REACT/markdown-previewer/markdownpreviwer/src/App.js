import React, { Component } from 'react';
import './App.css';
import * as marked from 'marked';

const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
            input:""
    }
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange = e => {
    this.setState({ input: e.target.value})
    console.log(this.state.input);
  }
    
  render() {
          
    return (
      <div>
      <Editor  value={this.state.input} onChange={this.onInputChange}
      />
      <Previewer markdown={this.state.input} />
      </div>
      
    );
  }
  }

  const Editor = (props) => {
    return (
      <div id="editor">
        <div className="header"></div>
      <textarea 
        value={props.markdown}
        onChange={props.onChange}
        type="text"/>
        </div>
      )}

  const Previewer = (props) => {
    return (
        <div  id='preview'>
          <div className="header"></div>
          <div id='text-box' dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}}></div>
        </div>
      )
  }
export default App;
