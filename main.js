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
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);
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
    httpRequest.open('GET', 'https://www.omdbapi.com/?t=' + input + '&plot=short&apikey=a67ee14e');
    httpRequest.send();
  }
}