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


/* Ändrar hover designen till click vid touch  */

/* if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
  const albumButtons = document.querySelectorAll('.album-button');
  
  albumButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Reset all album-name opacities
          buttons.forEach(btn => {
              const name = btn.querySelector('.album-name');
              name.style.opacity = '0';
              btn.querySelector('.album-cover').style.opacity = '1'; // Reset cover opacity
          });

          // Toggle the clicked button's album-name opacity
          const name = button.querySelector('.album-name');
          const cover = button.querySelector('.album-cover');

          if (name.style.opacity === '1') {
              name.style.opacity = '0';
              cover.style.opacity = '1'; // Reset to fully visible
          } else {
              name.style.opacity = '1';
              cover.style.opacity = '0.2'; // Apply low opacity
          }
      });
  });
} */