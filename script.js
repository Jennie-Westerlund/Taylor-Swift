/* const url = 'https://potterapi-fedeperin.vercel.app/en/'; */

const url = 'https://api.kanye.rest';
const quoteBox = document.querySelector('.quoteBox');

fetch(url)
  .then((response) => {
    // We take the response Promise and return it as JSON.
    console.log(response)
    return response.json();
  })
  .then((json) => {
    // Now we can now use the JSON as a normal object.
    console.log(json);
  });
  

  const fetchQuote = async (quote) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      quoteBox.innerHTML = `
        <h2>${data.name}</h2>
        <p>XP: ${data}</p>
      `;
    } catch (error) {
      console.error(error);
    }
  };