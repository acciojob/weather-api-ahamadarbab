//your JS code here. If required.
const button = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weatherData");

button.addEventListener("click", async () => {
	const apiKey = "b398dd1903101ab014af97c23715e3b6";
	const city = "London";

	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
		);

		const data = await response.json();

		weatherDiv.textContent = `Current weather in London: ${data.weather[0].main}`;
	} catch (error) {
		weatherDiv.textContent = "Failed to fetch weather data";
	}
});