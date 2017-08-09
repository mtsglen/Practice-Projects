/*'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.3a41676e-14f2-4ccc-98bb-c8ad0c640ccd';

exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
   // alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
}; */

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var welcomeOutput = "Welcome to the Random Wod Selector.  Are you ready for a workout?";
var welcomeReprompt = "Are you ready for your workout?";
var WodDeclartion = "Would you like a girls wod, a hero wod, another wod or a random selction.";
//var workoutPromt = "Your workout for today is," + "Good luck.";
var ExitMessage = ["Have a great day!", "See you later", "I will be here when you are ready.", "OK"];
var helpMessage = "I will give you a randomly selected Crossfit workout.  You can choose from one of the classic girl or hero workouts, or another Crossfit workout. Or I can choose one for you at random.  Are you ready for a workout?";
//var amrapQuestion = "Amrap stands for as many rounds as possible.  Your score is the number of rounds plus reps that you were able to complete in the given time."

var output = "";
//var weightRepeat = weight;

function LeaveMessage() {
  return randomArrayElement(ExitMessage);
}

var handlers = {
    'LaunchRequest': function () {
          this.emit(':ask', welcomeOutput, welcomeReprompt);
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", helpMessage, welcomeReprompt);
    },
    "AMAZON.StartOverIntent": function() {
        this.emit(":ask", welcomeOutput);
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", LeaveMessage);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", "");
    },
    "AMAZON.YesIntent": function () {
        this.emit(":ask", WodDeclaration);
    },
    "AMAZON.NoIntent": function () {
        this.emit(":tell", "");
    },
    "GirlsIntent": function () {
      //var workout = randomArrayElement(Girls);
      var workout = Girls[1];
      var say = 'Your workout is ' + workout.Name + '. This is a ' + workout.type + 'of ' + workout.movements + 'at ' + workout.weight + ". Would you like to keep this workout or get another?";
      this.emit(":tell", say);
    },
    "HeroIntent": function () {
      var workout = randomArrayElement(Hero);
      var say = 'Your workout is ' + workout.Name + '.' + 'This is a ' + workout.type + 'of ' + workout.movements + 'at ' + workout.weight + '. Would you like to keep this workout or get another?';
      this.emit(":tell", say);
    },
    "OtherIntent": function () {
      var workout = randomArrayElement(Other);
      var say = 'Your workout is ' + workout.Name + '.' + 'This is a ' + workout.WorkoutType + 'of ' + workout.Movements + 'at ' + workout.weight + ". Would you like to keep this workout or get another?";
      this.emit(":tell", say);
    },
    "RandomIntent": function () {
      var workout = randomArrayElement(random);
      var say = 'Your workout is ' + workout.Name + '.' + 'This is a ' + workout.type + 'of ' + workout.movements + 'at ' + workout.weight + ". Would you like to keep this workout or get another?";
      this.emit(":tell", say);
    },
    "ReselectIntent": function () {
        var say = WodDeclartion;
        this.emit(":ask", say);
      }
};

var Girls = [
  {WorkoutType: "20 minute Amrap", Name: "Cindy", Movements: "5 Pull ups, 10 push ups, 15 squats", Weight: "Bodyweight"},
  {WorkoutType: "For time workout", Name: "Fran", Movements: "21, 15, 9 of each movement thrusters and pull ups.", Weight: "95 pounds"},
  {WorkoutType: "For time workout", Name: "Annie", Movements: "50, 40, 30, 20, 10 of each movement double unders and sit ups.", Weight: "bodyweight"}
];

var Hero = [
  {WorkoutType: "For time workout", Name: "Murph", Movements: "5 Pull ups, 10 push ups, 15 squats", Weight: "20 pound wieght vest"},
  {WorkoutType: "For time workout", Name: "Chris Kyle", Movements: "Complete 3 rounds for time of 40 each kettlebell swings, box jumps, thrusters, and elevated push up", Weight: "kettlebell 53, 35, Box jump 24, 20, thrusters 65, 45 and push ups with feet on a 24, 18 inch box."},
  {WorkoutType: "20 minute Amrap", Name: "Jack", Movements: "10 each of push press, kettlebell swings, box jumps", Weight: "115 pounds"}
];

var Other = [
  {WorkoutType: "12 minute amrap", Name: "All legs", Movements: "5 hang cleans, 10 deadlifts, 15 box jumps", Weight: "cleans and deadlifts, 75, 115, boxjumps 20, 24"},
  {WorkoutType: "For time workout", Name: "Bad day", Movements: "21, 15, 9 of each front squats, thrusters, pushups", Weight: "95, 65"},
  {WorkoutType: "10 minute Emom", Name: "Cabin Fever", Movements: "7 burpees, 5 pushups", Weight: "Bodyweight"}
];

var random = Girls.concat(Hero, Other);

function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
