var requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

var request = new XMLHttpRequest();

request.open("GET", requestURL);

//convert the JSON response directly into a JavaScript object
request.responseType = "json";

request.send();

request.onload = function() {
  var superHeroes = request.response;
  //   populateHeader(superHeroes);
  //   showHeroes(superHeroes);
};
