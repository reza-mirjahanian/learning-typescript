
let request = require('request');
request('http://www.google.com', function (error: any, response: any, body: any) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body length: ', body.length);
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });

  request('http://date.jsontest.com/', { json: true }, (error: any, response: any, body: any) => {
    console.log(body.url);
    console.log(body);
    console.log("time: ", body.time)
    console.log("millis Since Epoch: ", body.milliseconds_since_epoch)
    console.log("date: ", body.date)
  });