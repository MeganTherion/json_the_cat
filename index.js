const { fetchBreedDescription } = require('./breedFetcher');
let breed = process.argv.slice(2);

fetchBreedDescription(breed, (error, description) => {
  if (error) { //first: what to do if error
    console.log('error:', error);
  } else {
    console.log(description);
  }

});