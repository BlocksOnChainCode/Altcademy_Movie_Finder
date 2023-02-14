/**
 * TODO - First make get request work in console.
 * ? overflow scroll for style? Netlfix like...
 * ? bootstrap or nah? 
 * ! Focus on clean and minimalist code this time, instead of feature set.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
        movieDiv.innerHTML = `<img class="movie-poster" src="${movie.Poster}" alt="${movie.Title}">
                              <h2>${movie.Title}</h2>
                              <p>Year: ${movie.Year}</p>
                              <p>Type: ${movie.Type}</p>
                              <p>imdbID: ${movie.imdbID}</p>`;
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
  console.log(`Triggered ${input}`);

  results.innerHTML = "";

  if (input) {
    httpRequest.open(
      "GET",
      `https://www.omdbapi.com/?s=${input}&plot=short&apikey=a67ee14e`
    );
    httpRequest.send();
  }
};







/*
const httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);
      console.log(movie);
      document.getElementById("image").setAttribute('src', movie.Poster);
      document.getElementById("title").innerHTML = movie.Title;
      document.getElementById("year").innerHTML = movie.Year;
      document.getElementById("cast").innerHTML = movie.Actors;
      document.getElementById("plot").innerHTML = movie.Plot;
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}


var searchMovie = function () {
  var input = document.querySelector('input').value;
  console.log(`Triggered ${input}`)
  if (input) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + input + '&plot=short&apikey=a67ee14e');
    httpRequest.send();
  }
}*/