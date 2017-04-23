angular.module('brb.services', [])

.factory("Constants", function() {

  return {
    background_images: {
      0: "images/backgrounds/1.jpg",
      1: "images/backgrounds/2.jpg",
      2: "images/backgrounds/3.jpg",
      3: "images/backgrounds/4.jpg",
      4: "images/backgrounds/5.jpg",
      5: "images/backgrounds/6.jpg"
    }
  }

})

.factory("Server", function(Constants) { //TODO: Change name of factory to something usefull
  /*
  Structure:
  * We need a list of users (I guess from https://tmi.twitch.tv/group/user/the_blitzz/chatters)
  * Users need multiple data (For bot)
  - names (From some Twitch api?)
  - image
  - Score
  - Currency?
  - Stats (Time watched? etc..)
  * User who won the quiz data -> https://api.twitch.tv/kraken/users/the_blitzz?client_id=0asgwzipe021ivr4cm7n8lrdvjiuwl
  * Questions
  - Answers
  */
  var fake = {
    players: {
      0: {
        name: "aleshgames",
        overall_score: 0,
        score: 12,
        currency: 0,
        logo:"https://randomuser.me/api/portraits/women/10.jpg",
        stats: {
        }
      },
      1: {
        name: "dirtdriv3r",
        overall_score: 0,
        score: 13,
        currency: 0,
        logo:"https://static-cdn.jtvnw.net/jtv_user_pictures/dirtdriv3r-profile_image-58389b9b5eb5cf90-300x300.jpeg",
        stats: {
        }
      },
      2: {
        name: "DTCxPredator",
        overall_score: 0,
        score: 20,
        currency: 0,
        logo:"https://static-cdn.jtvnw.net/jtv_user_pictures/dtcxpredator-profile_image-d283e604a28d6d46-300x300.png",
        stats: {
        }
      },
      3: {
        name: "jwelly",
        overall_score: 0,
        score: 10,
        currency: 0,
        logo:"https://randomuser.me/api/portraits/women/13.jpg",
        stats: {
        }
      },
      4: {
        name: "kaarloost",
        overall_score: 0,
        score: 15,
        currency: 0,
        logo:"https://static-cdn.jtvnw.net/jtv_user_pictures/kaarloost-profile_image-816b8bc73b8011c7-300x300.png",
        stats: {
        }
      },
      5: {
        name: "supercrackyoutube",
        overall_score: 0,
        score: 5,
        currency: 0,
        logo:"https://randomuser.me/api/portraits/women/15.jpg",
        stats: {
        }
      },
      6: {
        name: "the_blitzz",
        overall_score: 0,
        score: 0,
        currency: 0,
        logo:"https://randomuser.me/api/portraits/women/16.jpg",
        stats: {
        }
      },
    },
    winner: {
      "display_name": "the_blitzz",
      "score": 0, //Append user score to winner array in serverside?
      "_id": 32277451,
      "name": "the_blitzz",
      "type": "user",
      "bio": null,
      "created_at": "2012-07-20T07:54:45Z",
      "updated_at": "2017-04-22T04:01:52Z",
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/the_blitzz-profile_image-9b3dd78c7a8aa166-300x300.png",
      "_links": {
        "self": "https://api.twitch.tv/kraken/users/the_blitzz" //https://api.twitch.tv/kraken/users/the_blitzz?client_id=0asgwzipe021ivr4cm7n8lrdvjiuwl
      }
    },
    quiz: {
      id: 1,
      question: "Some random quiz question here?",
      answers: {
        1: "this is totally the right answer some long ass answer with no puntation etc even my english is broken now",
        2: "random answer lal",
        3: "I don't know what to type here",
        4: "plz, I want to sleep"
      },
      correct_answer: 3 //FIXME: We cannot have it like this in the real responce.. People can easily cheat by "sniffing"/Finding the website/api.

    }
  }


  return {
    all: function(){
      return fake;
    },
    top_players: function(){
      var players = [];
      for( var key in fake.players ) {
        if ( fake.players.hasOwnProperty(key) ) {
          players.push(fake.players[key]);
        }
      }
      var top_score = {};
      var highscore_count = Math.min(3, players.length);
      console.log(players.length);
      for (var i=0; i<highscore_count; i++) {
        var largest = 0;
        for (var j=1; j< players.length ; j++) {
          if (players[ j ].score > players[ largest ].score) largest = j;
        }
        top_score[ i ] = players[ largest ]; players.splice(largest , 1); // this modifies array, so probably you want to create copy of it before all this code
      }
      return top_score;
    }
  }
})
