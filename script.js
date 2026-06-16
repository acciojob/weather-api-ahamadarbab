//your JS code here. If required.
const button = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weatherData");

button.addEventListener("click", async () => {
	
	try {
		const response = await fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de"
		);

		const data = await response.json();

		weatherDiv.textContent = `Current weather in London: ${data.weather[0].main}`;
	} catch (error) {
		weatherDiv.textContent = "Failed to fetch weather data";
	}
});