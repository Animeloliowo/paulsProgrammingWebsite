// Name of city -> degrees in celcius -> the weather ->
// High and low for the day -> extreme weather warning ->
// hourly forecast -> 10 day forecast

// extras -> air pollution. precipitation. UV index. Sunrise.
// wind -> rainfall -> feels like -> humidity -> visibility
// -> pressure.

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "cd33220ba0dcf266016c5cfa40d253b5";
// let input = document.querySelector('input');

// const searchBox = document.querySelector(".elementsContainer input");
// const searchBtn = document.querySelector(".submit button");

// const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("submit");
input_box = document.getElementById("input_box");


async function checkWeather(location){
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
        }else{
            var data = await response.json();

            console.log(data);
        
            document.getElementById("London").innerHTML = data.name;
            document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.getElementById("highestTemp").innerHTML = "H : " + Math.round(data.main.temp_max) + "°c";
            document.getElementById("lowestTemp").innerHTML = "L : " + Math.round(data.main.temp_min) + "°c"; 

            document.querySelector(".error").style.display = "none";
        
        }

}


input_box = document.getElementById("input_box");

searchBtn.addEventListener("click", () =>{
    checkWeather(input_box.value);
}   
)


