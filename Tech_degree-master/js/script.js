
var quotes = [
{quote:"Hello",source:"Jimmy", citation:"Twitter",year:2018,tag:"slksl"},
{quote:"I love coding",source:"Bill", citation:"Microsoft",year:2019,tag:"slksl"},
{quote:"Me too",source:"Zuckerberg", citation:"Facebook",year:2019,tag:"slksl"},
{quote:"To be or not to be",source:"Shakespeare", citation:"Tudor",year:1592,tag:"slksl"},
{quote:"I like hot dogs",source:"Cody", citation:"Canteen",year:1999,tag:"slksl"},
{quote:"Kel loves orange soda",source:"Kel", citation:"Kenan & Kel",year:1995,tag:"slksl"}
];

//generates a random number from the object array

function getRandomQuote(){
  let randomNum = Math.floor((Math.random() * (quotes.length)));
  return quotes[randomNum]; 
}
 
 //based on the random number this function will generate the quote when called
function printQuote () {
  var randomItem= getRandomQuote();
  var codeHTML  = '';
  codeHTML  += '<p class="quote">' + randomItem.quote + '</p>';
  codeHTML  += '<p class="source">' + randomItem.source;
  
    if (randomItem.citation !== '' && randomItem.citiation !== null) {
       codeHTML  +='<span class = "citation">' + randomItem.citation + ' </span>';
    }

    if (randomItem.year !== '' && randomItem.year !== null) {
        codeHTML  += '<span class = "year">'+ randomItem.year + '</span>';
    } 

    if (randomItem.tag !== '' && randomItem.tag !== null) {
      codeHTML  += '<p class = "tag"> Tags: ' + randomItem.tag + '</p>';
    }

  codeHTML += '</p>';

  document.getElementById('quote-box').innerHTML = codeHTML ; 

}
 
//timer  
window.setInterval(printQuote, 30000);
 
//event listener which triggers the printQuote function when click  
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

