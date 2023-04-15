// select the button element
const button = document.querySelector("#fetch-quote");
// select the div element
const quoteDisplay = document.querySelector("#quote-display");
// select the paragraph elements
const quote = document.querySelector("#quote");
const character = document.querySelector("#character");
const anime = document.querySelector("#anime");

// add a click event listener to the button
button.addEventListener("click", function () {
  // fetch a random quote from the Animechan API
  fetch("https://animechan.vercel.app/api/random")
    .then(response => response.json()) // convert the response to json
    .then(data => {
      // update the text content of the paragraph elements with the data
      quote.textContent = data.quote;
      character.textContent = data.character;
      anime.textContent = data.anime;
      // show the div element
      quoteDisplay.classList.remove("hidden");
    })
    .catch(error => {
      // handle any errors
      console.error(error);
    });
});