const {
	fetchBreedDescription
} = require('./breedFetcher');

const breedName = process.argv[2];


fetchBreedDescription(breedName, function(error, description) {
	if (error) {
		console.log("The breed does not exist");
	} else {
		console.log(description);
	}
});