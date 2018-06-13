require("dotenv").config();

var Spotify = require('node-spotify-api')
var keys = require('./keys.js');
var Twitter = require('twitter');
var fs = require('fs');
var request = require('request'); 
var omdb = require('omdb');


var spotify = new Spotify(keys.spotify);
 

var command = process.argv[2]
var thing = process.argv[3];
var thing2 = process.argv[4];





// This was a challenger for me, I never got my answers to show up organized. 




// OMDB
var omdbRun = function(){
var request = require("request");
var queryUrl = "http://www.omdbapi.com/?t=" + thing + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {


    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});
}






// SPOTIFY
var spotified= function() {

  spotify.search(
    {
      type: "track",
      query: thing
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }
      console.log(data.tracks.items);
    }
  );
};






// TWITTER
var params = {screen_name: 'SchoolP41385219'};
var client = new Twitter(keys.twitter);

tweetTweet = function(){
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(error);
  }
  else{
    console.log(tweets);
  }
});
}





// I don't think I'm supposed to have this section, but I couldn't figure out how else to make it only run the api it was supposed to run 
 

if(command === 'movie-this'){
  omdbRun();
}
if(command === 'my-tweets'){
  tweetTweet();
}
if (command === 'spotify-this-song'){
  spotified();
}







console.log(keys.twitter);  
console.log(keys.spotify);  





 