const {
	fetchBreedDescription
} = require('../breedFetcher');
const {
	assert
} = require('chai');

describe('fetchBreedDescription', () => {
	it('returns a string description for a valid breed, via callback', (done) => {
		fetchBreedDescription('Coon', (error, description) => {
			// we expect no error for this scenario
			//assert.equal(errror, description);

			const expectedDesc = "They are known for their size and luxurious long coat Maine Coons are considered a gentle giant. The good-natured and affable Maine Coon adapts well to many lifestyles and personalities. She likes being with people and has the habit of following them around, but isn’t needy. Most Maine Coons love water and they can be quite good swimmers.";

			// compare returned description
			assert.equal(expectedDesc, description);

			done();
		});
	});
	it('returns error and description as null for an invalid/non-existent breed, via callback', (done) => {
		fetchBreedDescription('Siberian', (err, desc) => {
			assert.equal(err, null);
			done();
		});
	});
});