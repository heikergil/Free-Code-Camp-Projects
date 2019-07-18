import React, { Component } from 'react';
import './App.css';
// This inserts the module marked into the current scope, 
// containing all the exports from the module
import * as marked from 'marked';
// Get reference, this will change the markdown is rendered from a html like to a github like markdown
const renderer = new marked.Renderer();
// if true, add <br> on a single line break (copies GitHub). Requires gfm be true.
marked.setOptions({
  breaks: true,
});
// main statefull component or container component
class App extends Component {
  constructor(props) {
    super(props)
    // state is any data your application needs to know about.
    this.state = {
            input:""
    }
    // methods bindings
    this.onInputChange = this.onInputChange.bind(this);
  }
  // when the value of target change run this function
  onInputChange = e => {
    this.setState({ input: e.target.value})
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

// stateless component
  const Editor = (props) => {
    return (
      <div id="editor">
        <div className="header"></div>
      <textarea
      // since 'textarea' cannot comunicate directly with 'app' element, 'onchange' is going to send a signal
      // to the onchange props passed to the Editor element on render everytime it changes. 
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
