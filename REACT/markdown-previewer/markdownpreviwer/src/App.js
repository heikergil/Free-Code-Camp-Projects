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
            input: placeholder,
    }
    // methods bindings
    this.onInputChange = this.onInputChange.bind(this);
  }
  // when the value of target change run this function
  onInputChange = e => {
    this.setState({ input: e.target.value})
  }
  // this adds freecodecamp tests script
  componentDidMount () {

    const script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
    
}
    
  render() {
          
    return (
      <div>
      <Editor  markdown={this.state.input} onChange={this.onInputChange}
      />
      <Previewer markdown={this.state.input} />
      </div>
      
    );
  }
  }

// stateless component
  const Editor = (props) => {
    return (
      <div id="editor-wrap">
        <div className="header">Editor</div>
      <textarea id="editor" value={props.markdown}
      // since 'textarea' cannot comunicate directly with 'app' element, 'onchange' is going to send a signal
      // to the onchange props passed to the Editor element on render everytime it changes. 
        onChange={props.onChange}
        type="text"/>
        </div>
      )}

  const Previewer = (props) => {
    return (
        <div  id='preview-wrap'>
          <div className="header">Previewer</div>
          <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}}></div>
        </div>
      )
  }

  const placeholder = 
`# React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default App;


