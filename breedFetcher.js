const request = require("request");

let arg = process.argv.slice(2);
let breed = arg[0];

request(
	"https://api.thecatapi.com/v1/breeds/search?q=sib",
	(error, response, body) => {
		if (error) {
			console.log("error:", error);
		} else {
			// Print the error if one occurred
			//console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
			//console.log("body:", body); // Print the HTML for the Google homepage.
			const data = JSON.parse(body);
			//console.log(data);
			if (breed === data[0]["name"].toLowerCase()) {
				console.log(data[0]["name"] + "\n" + data[0]["description"]);
			} else {
				console.log("Sorry, breed not found");
			}
		}
	}
);