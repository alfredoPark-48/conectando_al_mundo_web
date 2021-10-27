const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (location) {
	geocode(location, (err, { latitude, longitude, location }) => {
		if (err) {
			return console.log("Error", err);
		} else {
			forecast(latitude, longitude, (error, forecastData) => {
				if (err) {
					return console.log("Error", error);
				} else {
					console.log(location);
					console.log(forecastData);
				}
			});
		}
	});
} else {
	console.log("No location provided!");
}
