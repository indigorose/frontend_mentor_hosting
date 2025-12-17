// Weather Code

/* 
Code	Description
0	    Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail


*/

const latitude = 51.5074; // e.g., London
const longitude = -0.1278;
const temperatureUnit = 'celsius';

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&temperature_unit=${temperatureUnit}&hourly=temperature_2m,weathercode&timezone=auto`;

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		const times = data.hourly.time;
		const temps = data.hourly.temperature_2m;
		const codes = data.hourly.weathercode;

		const now = new Date();

		// Find the first hour >= now
		const startIndex = times.findIndex((time) => new Date(time) >= now);

		// Get next 8 hours
		const next8Hours = times
			.slice(startIndex, startIndex + 8)
			.map((time, i) => ({
				time,
				temperature: temps[startIndex + i],
				weatherCode: codes[startIndex + i],
			}));

		console.log(next8Hours);
	})
	.catch((err) => console.error(err));
