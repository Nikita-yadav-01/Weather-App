async function getWeather() {

    const city = document.getElementById("locationInput").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const apiKey = "0b83ebc93ba64699bd8142904261406";

    const url =
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("weatherInfo").style.display = "block";

        document.getElementById("city").innerText =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("temp").innerText =
            `${data.current.temp_c}°C`;

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            `💧 ${data.current.humidity}%`;

        document.getElementById("wind").innerText =
            `🌬 ${data.current.wind_kph} km/h`;

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

    }
    catch(error){
        alert(error.message);
    }
}