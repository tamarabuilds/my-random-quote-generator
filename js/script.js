/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
 *  @type {number} - sets number of seconds for auto-refresh of quotes              // Is it best practice to put fixed values at top and in caps?
***/
const REFRESHSECONDS = 10000

/*** 
 *  @type {array} - stores quotes and their properties
***/
const quotes = [
  {
    quote: "Before you criticize a man, walk a mile in his shoes. That way, if he's upset, he's a mile away and you've got his shoes.",
    source: "Johnny Carson",
    citation: "The Tonight Show Starring Johnny Carson",
    year: 1991,
    tag: "humor"
  },
  {
    quote: "My mother always used to say: The older you get, the better you get, unless you're a banana.",
    source: "Rose (Betty White)",
    citation: "The Golden Girls",
    year: 1987,
    tag: "humor"
  },
  {
    quote: "I changed all my passwords to 'Incorrect.' So whenever I forget, it will tell me 'Your password is incorrect.'",
    source: "Michael Scott",
    citation: "The Office",
    tag: "humor"
  },
  {
    quote: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    source: "Will Ferrell",
    tag: "humor"
  },
  {
    quote: "There's nothing simpler than avoiding people you don't like. Avoiding one's friends, that's the real test.",
    source: "Dowager Countess Violet Crawley (Maggie Smith)",
    citation: "Downton Abbey",
    year: 2014,
    tag: "humor"
  },
  {
    quote: "Does it disturb anyone else that 'The Los Angeles Angels' baseball team translates directly to 'The The Angels Angels'?",
    source: "Neil DeGrasse Tyson",
    citation: "X (Twitter)",
    year: 2012,
    tag: "humor"
  }
]


/***
 *  Calculates a random number and returns a quote based on that number.
 * 
 *  @returns {object} - An object storing a quote with its properties.
***/

function getRandomQuote(){
  const randomNumber = Math.floor( Math.random() * quotes.length )
  return quotes[randomNumber]
}

/***
 *  Updates the background to a random background color
 * 
 *  No params or return.
***/
function getRandomColor(){
  const randomValue = () => Math.floor( Math.random() * 256)                        // Is it OK practice to call an annonymous function in your function?
  const randomRGB = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`

  return randomRGB
}




/***
 *  Calls getRandomQuote(), builds HTML string display the quote and its properties,
 *  and finally displays the random quote in the browser.
 * 
 *  No params or return.
***/

function printQuote(){
  const randomQuote = getRandomQuote()
  const color = getRandomColor()
  
  let html = `
  <p class="quote">${randomQuote['quote']}</p>
  <p class="source">${randomQuote['source']}`
  
  if ( randomQuote['citation'] ){
    html += `<span class="citation"> ${randomQuote['citation']} </span>`
  }
  
  if ( randomQuote['year'] ){
    html += `<span class="year"> ${randomQuote['year']} </span>`
  }
  
  if ( randomQuote['tag']) {
    html += `<span class="citation"> ${randomQuote['tag']} </span>`
  }
  
  html += `</p>`
  
  document.getElementById('quote-box').innerHTML = html
  
  // Adding the random background color, picked up from https://stackdiary.com/tutorials/how-to-change-background-color-with-javascript/
  document.body.style.backgroundColor = color
  
  return
}



/***
 *  Auto-refreshes quotes on the page every 10 seconds.
 * 
 *  Credit to https://www.encodedna.com/javascript/auto-refresh-page-every-10-second-using-javascript-setInterval-method.htm
***/
  
window.setInterval(printQuote, REFRESHSECONDS)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);