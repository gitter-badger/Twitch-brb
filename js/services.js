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
        score: 12,
        //image?
      },
      1: {
        name: "dirtdriv3r",
        score: 1,
        //image?
      },
      2: {
        name: "DTCxPredator",
        score: 20,
        //image?
      },
      3: {
        name: "jwelly",
        score: 10,
        //image?
      },
      4: {
        name: "kaarloost",
        score: 11,
        //image?
      },
      5: {
        name: "supercrackyoutube",
        score: 5,
        //image?
      },
      6: {
        name: "the_blitzz",
        score: 0,
        //image?
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
      "self": "https://api.twitch.tv/kraken/users/the_blitzz"
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
    }
  }
})
