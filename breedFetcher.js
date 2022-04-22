const request = require('request');
const fs = require('fs');
let breed = process.argv.slice(2);

request(`https://api.thecaapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => { //here comes the callback which takes these three paramenters
  const data = JSON.parse(body);
  if (error) { //first: what to do if error
    console.log('error:', error);
  } else if (data[0] === undefined) {
    console.log("no such cat!");
  } else {  
    console.log(data);
    console.log(typeof data);
    console.log(data[0]);
  }
});



