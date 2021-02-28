document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    let city = e.target.city.value;
    let country = e.target.country.value;
fetch(`http://api.weatherstack.com/current?access_key=aa6a7c663c702654720e1e21bffd10be&query=${city}&country=${country}`)
.then( function (response){return response.json()}) 
.then(function (data) {
console.log(data); 
document.querySelector('.city-name').innerHTML = data.location.name;
document.querySelector('.temp').innerHTML = `${data.current.temperature} &degC`;
document.querySelector('.country-name').innerHTML = data.location.country;
document.querySelector('.speed').innerHTML = `Speed: ${data.current.wind_speed} k/h`;
document.querySelector('.humidity').innerHTML = `Humidity: ${data.current.humidity} %`;
document.querySelector('.feelslike').innerHTML = `Feelslike: ${data.current.feelslike} &degC`;
document.querySelector('.time').innerHTML = `Time: ${data.current.observation_time}`;
//document.querySelector('.img1').innerHTML = `<img src="https://assets.weatherstack.com/images/wsymbols01_png_64/${data.current.weather_descriptions[0]['0']}">`;
});
});