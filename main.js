
function userAction() {
  let searchString = document.getElementById("myInput").value;
  let txt = "";
  console.log(searchString);
  let webhook_url = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/atlassearchdemo-bhljm/service/getMovies/incoming_webhook/webhook0";
  let url = webhook_url + "?arg=" + searchString;
  function handleResponse(response) {
    if (!response.ok) {
      console.log(response);
      txt += `<br><br><br><b><h3>Sadly you have an error. Status: ${response.status}`;
      if (response.json.length === 0) {
        txt += `<br><br>Make sure to search for some type of movie. Don't leave your search box empty.</h3></b>`;
      }
      document.getElementById("results").innerHTML = txt;
      throw new Error(response.statusText);
    }
    return response.json();
  }
  function renderMovieData(movieJSON) {
    if (movieJSON["$undefined"] === true) {
      console.log('NO FETCH RESULT');
      txt += `<br><br><br><b><h3>IMPLEMENT FULL TEXT SEARCH AGGREGATION TO SEARCH MOVIE COLLECTION</h3></b>`;
    } else {
      console.log("FETCHED RESULT... ");
      console.log("Fetched array has " + movieJSON.length + " entries");
      if (movieJSON.length !== 0) {
        txt = buildMovieList(movieJSON);
      } else {
        txt += `<br><br><br><b><h3>Sadly you have no search results. Try checking your spelling or changing your search terms.</h3></b>`;
      }
    }
    document.getElementById("results").innerHTML = txt;
  }
  fetch(url)
    .then(handleResponse)
    .then(renderMovieData)
    .catch(function (error) {
      console.error('Whoopsie!', error);
    });
}
function buildMovieList(movies) {
  // HELPER FUNCTION FOR USER ACTION
  let txt = "";
  movies.forEach(movie => {
    txt += `
      <br> <b><p style="color:green">${movie.title}</p></b>
      <br> <b>Score:  ${movie.score["$numberDouble"]} </b>
      <br> Year: ${movie.year["$numberInt"]}
      <br> <br>
    `;
    movie.highlight.forEach(highlight => {
      highlight.texts.forEach(text => {
        if (text.type === "hit") {
          txt += `<b><mark> ${text.value} </mark></b>`;
        } else {
          txt += text.value;
        }
      })
    })
    txt += "<hr>"
  })
  return txt;
}
