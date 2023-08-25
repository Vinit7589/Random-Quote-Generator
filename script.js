const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector("button")
const authorName = document.querySelector(".name")
const soundBtn = document.querySelector(".sound")
const copyTxtBtn = document.querySelector(".copy")

// random quote function
function randomQuote() {

    quoteBtn.innerText = "Loading Quote..."

    // Fetching the quote, autorname using quotable api with random feature
    fetch("https://api.quotable.io/random").then(response => response.json()).then(data => {
        quoteText.innerText = data.content
        authorName.innerText = data.author
        quoteBtn.innerText = "New Quote"
    })
}

// function for Speech Mode
function soundMode() {
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance) // speak method of speechSyntesis speaks the utterance

}

// Function for copy quote 
function copyTextMode() {
    // Copying the quote text on copyBtn when it is clicked
    // writeText() property write the specified text into the string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText)
    alert("Text is copied")
}


quoteBtn.addEventListener("click", randomQuote)
soundBtn.addEventListener("click", soundMode)
copyTxtBtn.addEventListener("click", copyTextMode)