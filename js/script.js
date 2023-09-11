/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Before you criticize a man, walk a mile in his shoes. That way, if he's upset, he's a mile away and you've got his shoes.",
    source: "Johnny Carson",
    citation: "The Tonight Show Starring Johnny Carson",
    year: 1991
  },
  {
    quote: "My mother always used to say: The older you get, the better you get, unless you're a banana.",
    source: "Rose (Betty White)",
    citation: "The Golden Girls",
    year: 1987
  },
  {
    quote: "I changed all my passwords to 'Incorrect.' So whenever I forget, it will tell me 'Your password is incorrect.'",
    source: "Michael Scott",
    citation: "The Office"
  },
  {
    quote: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    source: "Will Ferrell"
  },
  {
    quote: "There's nothing simpler than avoiding people you don't like. Avoiding one's friends, that's the real test.",
    source: "Dowager Countess Violet Crawley (Maggie Smith)",
    citation: "Downton Abbey",
    year: 2014
  },
  {
    quote: "Does it disturb anyone else that 'The Los Angeles Angels' baseball team translates directly to 'The The Angels Angels'?",
    source: "Neil DeGrasse Tyson",
    citation: "X (Twitter)",
    year: 2012
  }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  const randomNumber = Math.floor( Math.random() * quotes.length )
  return quotes[randomNumber]
}

/***
 * `printQuote` function
***/

function printQuote(){
  const randomQuote = getRandomQuote()
  let html = `
    <p class="quote">${randomQuote['quote']}</p>
    <p class="source">${randomQuote['source']}`

  if ( randomQuote['citation'] ){
    html += `<span class="citation"> ${randomQuote['citation']} </span>`
  }

  if ( randomQuote['year'] ){
    html += `<span class="year"> ${randomQuote['year']} </span>`
  }

  html += `</p>`

  document.getElementById('quote-box').innerHTML = html

  return
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);