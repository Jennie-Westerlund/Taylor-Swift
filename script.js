/* const url = 'https://potterapi-fedeperin.vercel.app/en/'; */
/* const url = 'https://api.kanye.rest'; */
/* const url = 'https://taylorswiftapi.onrender.com/get'; */

/* const url = `https://taylorswiftapi.onrender.com/get${album}`; */
const quoteBox = document.querySelector('.quoteBox');


const getAlbum = (album) => {
  const clickedButton = album.target;
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
    const cleanQuote = json.quote.replace("/", "<br>");
    quoteBox.innerHTML = `
    <h2>${cleanQuote}</h2>
    <p>Song: ${json.song}<p>
  `; 
  });
};

const albumButtons = document.querySelectorAll('.albumButton');

// Loop through the buttons and attach event listeners
albumButtons.forEach((button) => {
  button.addEventListener('click', getAlbum);
});