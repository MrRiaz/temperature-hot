const api = {
    key: "d2250497e6bf63a6f9632cf6264285c6",
    base: 'https://api.openweathermap.org/data/2.5/'
}

const buttonMain = document.getElementById('seatch-btn');

buttonMain.addEventListener('click', function(){
    const city = document.getElementById('search-box').value;
    document.getElementById('search-box').value = "";

    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then(data => {
        display(data);
    })
    .catch(error => alert('Please Enter Valid City Name'));
})


function display(data){
    let city = document.getElementById('city');
    city.innerText = `${data.name}, ${data.sys.country}`;

    let now = new Date;
    let date = document.getElementById('date');
    date.innerText = now;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(data.main.temp)}<span>&deg;C</span>`;

    let weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;

    let hiLow = document.getElementById('hi-low');
    hiLow.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;

    let weatherIcon = document.getElementById('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// function dateBuilder(d){
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getday()];
//     let month = months[d.getMonth()];
//     let date = d.getDate();
//     let year = d.getFullYear();
// };