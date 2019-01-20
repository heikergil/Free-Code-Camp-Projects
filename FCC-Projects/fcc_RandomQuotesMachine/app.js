/* this code is copied from https://codepen.io/barbosabyte/pen/pNJbxd */
$(document).ready(function() {

const citurl = quotesApi();  
const twiurl = twitterUrl();  
$("#quote-card").on("click", function() {
  getCit();
});

function getCit() {  
  $.getJSON(citurl, function(resposta) {
    $("p").html(resposta.quoteText);
    $("#author").html("-" + resposta.quoteAuthor);
    $("#twitter").attr("href", 
      twiurl + resposta.quoteText + " ― " + resposta.quoteAuthor);
  }); 
}
getCit();  
});
function twitterUrl() {
    return "https://twitter.com/intent/tweet?hashtags=quotes&text=";
}

function quotesApi() {
    return "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
}

