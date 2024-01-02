let apikey = "07f1148db74ee5fa0ea5d8fb0333308b";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humditiy-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img")

async function getWeatherData(){
    if (userCity.value==""){
        alert("Enter City Name")
    }
    else{
        city = userCity.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        let data = await response.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weatherImage.src = "clear.png";
        }
        if(data.weather[0].main=="Snow"){
            weatherImage.src = "show.png";
        }
        if(data.weather[0].main=="Cloud"){
            weatherImage.src = "snow.png";
        }
        if(data.weather[0].main=="Drizzle"){
            weatherImage.src = "drizzle.png";
        }
        if(data.weather[0].main=="Mist"){
            weatherImage.src = "mist.png";
        }
        if(data.weather[0].main=="Rain"){
            weatherImage.src = "rain.png";
        }
        console.log(data)
    }
}
