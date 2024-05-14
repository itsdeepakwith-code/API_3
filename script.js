const apiKey = "UgapPRlQ72vLLymViR1toiFaD6mDEtLr";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsElement = document.getElementById("results");

function searchGifs(searchTerm) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((error) => console.error(error));
}

function displayResults(data) {
  resultsElement.innerHTML = "";

  if (data.data.length > 0) {
    data.data.forEach((gif) => {
      const imageUrl = gif.images.original.url;
      const imageElement = document.createElement("img");
      imageElement.classList.add("col-md-4", "mb-3");
      imageElement.src = imageUrl;

      resultsElement.appendChild(imageElement);
    });
  } else {
    const messageElement = document.createElement("p");
    messageElement.classList.add("text-center");
    messageElement.textContent = "No GIFs found for this search.";

    resultsElement.appendChild(messageElement);
  }
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    searchGifs(searchTerm);
  }
});
