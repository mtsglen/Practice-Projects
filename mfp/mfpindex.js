var pounds = 150;
var kilo = pounds / 2.2;
var calOver = 500;

var workouts = [
  {workoutType: 'burpees', metScore: 8},
  {workoutType: 'jumprope', metScore: 2.85},
  {workoutType: 'sample', metScore: 4}
  ];

var movement = workouts[0];
var met = movement.metScore;
var calMin = (0.0175 * met * kilo);

var count = Math.round(calOver / calMin);
var final = "You are " + calOver + " calories over your daily goal. That is the equivalent of " + movement.workoutType + " for " + count + " minutes.";

/*function randomMovement(array) {
  return [
  array[Math.floor(Math.random() * array.length)]]}
  //var i = 0;
  //i = Math.floor(Math.random() * array.length);
  //return(array[i]);}

//return final; */
console.log(final);
