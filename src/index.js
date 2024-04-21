function refreshWeather(response){
    let temperatureElement= document.querySelector("#temp");
    let temperature= Math.round(response.data.temperature.current);
    let placeElement= document.querySelector("#place");
    let descriptionElement= document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let speedElement= document.querySelector("#speed");
    let timeElement= document.querySelector("#time");
    let date= new Date(response.data.time * 1000);

    console.log(response.data);

    placeElement.innerHTML= response.data.city;
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
    temperatureElement.innerHTML= Math.round(temperature);
    speedElement.innerHTML= `${response.data.wind.speed}mph`;
    timeElement.innerHTML= formatData(date);
}

function formatData(date) {
    let minutes= date.getMinutes();
    let hours= date.getHours();
let days= [
    "Sunday",
     "Monday", 
     "Tuesday", 
     "Wednesday", 
     "Thursday", 
     "Friday", 
     "Saturday"
    ];
let day = days[date.getDay()];

return `${day} ${hours}:${minutes}`;
}

function searchCity(place) {
    let apiKey= "4837a3o69bc4d4a5ebtf3c05040113d8"
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${place}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(refreshWeather);
    
}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput= document.querySelector ("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);