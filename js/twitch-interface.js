// key : https://wind-bow.gomix.me/twitch-api

// var getUser = $.get('https://wind-bow.gomix.me/twitch-api/streams/imaqtpie'),
//     fillContainer = function(html) {
//       $('#some-awesome-container').html(html)
//       console.log(html);
//     },
//     oops = function() {
//       console.log('Where did all the dinosaurs go?');
//     };
//
// console.log('test')
// getUser.then(fillContainer, oops);

$(document).ready(function(){

  $('#twitch-id').click(function(){
    var twitchuser = $('#twitchuser').val()

    $.get('https://wind-bow.gomix.me/twitch-api/channels/' + twitchuser, function(result){
      $('.showFollowersCount').text("The total followers for " + twitchuser + " are at " + result["followers"])
      console.log(result)
    });
  });
  $('#twitch-follow').click(function(){
    var twitchfollow = $('#twitchfollow').val()
    $.get('https://wind-bow.gomix.me/twitch-api/channels/' + twitchfollow + '/follows', function(result){
    result["follows"].forEach (function(follow){
      $('.showUsers').append("<li>" + follow['user']['name'] + "</li>")
    })
    result["follows"].forEach (function(follow){
      $('.showCreated').append("<li>" + follow['user']['updated_at'].substr(0,10) + "</li>")
    })
    });
  });
  $('#twitch-featured').click(function(){
    $.get('https://wind-bow.gomix.me/twitch-api/streams/featured/' , function(result){
    result["featured"].forEach (function(result){
      $('.showFeatured').append("<li>" + result['stream']['channel']['display_name'] + "</li>")
      console.log(result)
      })
    });
  });
});
