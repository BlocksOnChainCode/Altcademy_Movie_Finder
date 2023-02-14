/**
 * ? overflow scroll for style? Netlfix like...
 * ? bootstrap or nah? 
 * ! Focus on clean and minimalist code this time, instead of feature set.
 */

const httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText);
      console.log(response);

      const resultsDiv = document.getElementById("results");
        console.log(resultsDiv.children)
      for (let i = 0; i < response.Search.length; i++) {
        const movie = response.Search[i];
          console.log(movie);
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie-card";
        movieDiv.innerHTML = `
                              <p class="category-color">${movie.Type}</p>
                              <img  class="movie-poster" src="${movie.Poster}" alt="${movie.Title}">
                        
                              <h3>Year: ${movie.Year}</h3>
                              <h2><a href="https://www.imdb.com/title/${movie.imdbID}">${movie.Title}</a></h2>
                              `;
        resultsDiv.appendChild(movieDiv);
      }
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
};

const searchMovie = function() {
  const results = document.getElementById('results');
  const input = document.querySelector("input").value;
  results.innerHTML = "";
    if (input) {
      httpRequest.open(
        "GET",
        `https://www.omdbapi.com/?s=${input}&apikey=a67ee14e`
      );
      httpRequest.send();
    }
};

