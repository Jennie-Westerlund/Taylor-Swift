const quoteBox = document.querySelector('.quote-box');
const quote = document.querySelector('.quote');
const songTitle = document.querySelector('.song-title');


const getAlbum = (album) => {
  const clickedButton = album.target.parentElement;
  const clickedButtonValue = clickedButton.getAttribute("data-album-name");
  console.log(clickedButtonValue);
  const url = `https://taylorswiftapi.onrender.com/get?album=${clickedButtonValue}`;
  fetch(url)
  .then((response) => {
    // We take the response Promise and return it as JSON.
    return response.json();
  })
  .then((json) => {
    // Now we can now use the JSON as a normal object.
    const cleanQuote = json.quote.replace(/\//g, '\n');
    quote.textContent = `${cleanQuote}`;
    songTitle.textContent = `Song: ${json.song}`; 
  });
};

const albumButtons = document.querySelectorAll('.album-button');

// Loop through the buttons and attach event listeners
albumButtons.forEach((button) => {
  button.addEventListener('click', getAlbum);
});
