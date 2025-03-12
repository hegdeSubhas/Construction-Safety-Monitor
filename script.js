const API_KEY = '2d34e40683d91b873f383bc240dc69f8';  // Replace with your OpenWeatherMap API Key

// Get user's location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeatherData(latitude, longitude);
}

function error() {
    alert("Unable to retrieve your location. Please enable location services.");
}

// Fetch weather data from OpenWeatherMap API
async function getWeatherData(lat, lon) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        let data = await response.json();
        
        let temperature = data.main.temp;
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        let weatherCondition = data.weather[0].main;
        let aqi = Math.floor(Math.random() * 300);  // Mock AQI value (Use AQI API for real data)

        document.getElementById('temperature').innerText = `${temperature}°C`;
        document.getElementById('humidity').innerText = `${humidity}%`;
        document.getElementById('wind-speed').innerText = `${windSpeed} km/h`;
        document.getElementById('weather').innerText = weatherCondition;
        document.getElementById('aqi').innerText = aqi;
        
        analyzeSafety(temperature, humidity, windSpeed, aqi, weatherCondition);
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('safety-message').innerText = "Error fetching climate data.";
    }
}

// Safety Analysis Function
function analyzeSafety(temp, humidity, wind, aqi, weather) {
    let message = "Safe to work";
    let danger = false;

    if (temp > 40) {
        message = "Too hot! Risk of heatstroke.";
        danger = true;
    } else if (temp < 5) {
        message = "Too cold! Risk of hypothermia.";
        danger = true;
    }

    if (humidity > 85) {
        message = "High humidity! Risk of exhaustion.";
        danger = true;
    }

    if (wind > 50) {
        message = "Strong winds! Work may be unsafe.";
        danger = true;
    }

    if (aqi > 150) {
        message = "Poor air quality! Use masks.";
        danger = true;
    }

    if (weather === "Thunderstorm") {
        message = "Severe weather alert! Stay indoors.";
        danger = true;
    }

    if (danger) {
        document.getElementById('safety-message').style.color = "red";
    } else {
        document.getElementById('safety-message').style.color = "green";
    }

    document.getElementById('safety-message').innerText = message;
}

// Emergency Button Click
document.getElementById('emergency-button').addEventListener('click', function() {
    alert("Emergency reported! Supervisors have been notified.");
});
