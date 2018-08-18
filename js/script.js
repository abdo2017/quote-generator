// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss"
    },
    {
        quote:
            "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde"
    },
    {
        quote:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein"
    },
    {
        quote: "So many books, so little time.",
        source: "Frank Zappa"
    }
];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
    var randomNumber = Math.floor(Math.random() * array.length+1);
    return array[randomNumber];
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
    var myQuote = getRandomQuote(quotes);
    var output = `
    <p class="quote">${myQuote.quote}</p>
        <p class="source">${myQuote.source}
            <span class="citation"></span>
            <span class="year"></span>
        </p>
    `;
    document.getElementById("quote-box").innerHTML = output;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
    .getElementById("loadQuote")
    .addEventListener("click", printQuote, false);
