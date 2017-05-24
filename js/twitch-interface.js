// key : https://wind-bow.gomix.me/twitch-api

var Twitch = require('./../js/twitch.js').twitchModule;

var followerCountFront = function(twitchuser, result){
  $('.showFollowersCount').text("The total followers for " + twitchuser + " are at " + result["followers"]);
};

var followerSpecificFront = function(twitchfollow, result){
  result["follows"].forEach (function(follow){
  $('.showUsers').append("<li>" + follow['user']['name'] + "</li>")
  $('.showCreated').append("<li>" + follow['user']['updated_at'].substr(0,10) + "</li>")
})};

var streamFeaturedFront = function(result){
  result["featured"].forEach (function(result){
    $('.showFeatured').append("<li>" + result['stream']['channel']['display_name'] + "</li>")
})};

$(document).ready(function(){

  $('#twitch-id').click(function(){
    var twitchuser = $('#twitchuser').val()
    var newTwitch = new Twitch();
    newTwitch.followerCount(twitchuser, followerCountFront)
  });
  $('#twitch-follow').click(function(){
    var twitchfollow = $('#twitchfollow').val()
    var newTwitch = new Twitch();
    newTwitch.followerSpecific(twitchfollow, followerSpecificFront)
  });
  $('#twitch-featured').click(function(){
    var newTwitch = new Twitch();
    newTwitch.streamFeatured(streamFeaturedFront)
  });
});
