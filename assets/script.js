var button = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");

function getApi(){
 
  var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=san%20antonio&appid=1aad1d2ff9ff11a4cfcf3778766ed9c6';

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })

};
getApi()
