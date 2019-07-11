import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote'
import Author from './components/Author'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteText: "",
      quoteAuthor: "",
      isLoading: false,
      
    }
  }
  
  
  componentDidMount() {
    async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://api.forismatic.com/api/1.0/?format=json&method=getQuote&jsonp=?&lang=en');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
//call getData function
  getData()
  .then(data => {
    if (data.quoteAuthor && data.quoteText){
        this.setState({
          quoteText:data.quoteText,
          quoteAuthor:data.quoteAuthor,
          isLoading:false
        })
    } else {
      return console.error("FUUUUUUUUUUUUUCKKKKK")
    }
  }
);
}
    
          
  handleClick() {
    async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://api.forismatic.com/api/1.0/?format=json&method=getQuote&jsonp=?&lang=en');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }

//call getData function
  getData()
  .then(data => {
    if (data.quoteAuthor && data.quoteText){
        this.setState({
          quoteText:data.quoteText,
          quoteAuthor:data.quoteAuthor,
          isLoading:false
        })
    } else {
      return console.error("FUUUUUUUUUUUUUCKKKKK")
    }
  });
  }

  render() {
      
    let tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + this.state.quoteText + " ― " + this.state.quoteAuthor;
    
    return (
      <div className="App" id="quote-box" style={{margin:"auto"}}>
          <div id="text">
       <Quote text={this.state.quoteText} />
       </div>
       <div id="author">
        <Author text={this.state.quoteAuthor} />
        </div>
       <div >
         <button id="new-quote" onClick={this.handleClick.bind(this)}>Get a new Quote</button>
         <a href={tweetUrl} className="fa fa-twitter" id="tweet-quote" target="_blank" rel="noopener noreferrer"> </a>
        </div>

      </div>
      
    );
  }
  }

export default App;
