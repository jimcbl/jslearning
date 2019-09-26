// function updateDisplay(verse) {
//   verse = verse.replace(" ", "");
//   verse = verse.toLowerCase();
//   var url = verse + ".txt";

//   // XMLHttpRequest
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.responseType = "text";
//   request.onload = function() {
//     poemDisplay.textContent = request.response;
//   };
//   request.send();

//   // Fetch
//   fetch(url).then(function(response) {
//     response.text().then(function(text) {
//       poemDisplay.textContent = text;
//     });
//   });
// }

fetch("data.json").then(res => {
  res.text().then(text => {
    console.log(text);
  });
});
