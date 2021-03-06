const request = require('request');
const fs = require('fs');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => { //here comes the callback which takes these three paramenters
  
    if (error) { //first: what to do if error
      callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    }  else {
      callback("breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };



