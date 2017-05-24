Twitch = function(){

}

Twitch.prototype.followerCount = function(twitchuser, followerCountFront) {
  $.get('https://wind-bow.gomix.me/twitch-api/channels/'+ twitchuser).then(function(response){
    followerCountFront(twitchuser, response);
  });
};

Twitch.prototype.followerSpecific = function(twitchfollow, followerSpecificFront) {
  $.get('https://wind-bow.gomix.me/twitch-api/channels/' + twitchfollow + '/follows', function(follow){
    followerSpecificFront(twitchfollow, follow)
  });
};

Twitch.prototype.streamFeatured = function(streamFeaturedFront) {
  $.get('https://wind-bow.gomix.me/twitch-api/streams/featured/' , function(result){
    streamFeaturedFront(result)
  });
};

exports.twitchModule = Twitch;
