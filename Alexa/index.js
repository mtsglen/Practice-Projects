function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
};

var = GirlsIntent function () {
  var workout = randomArrayElement(Girls);
  var say = 'Your workout is ' + workout.Name + '.' + 'This is a ' + workout.type + 'of ' + workout.movements + 'at ' + workout.weight.  "Would you like to keep this workout or get another?"
  this.emit(":tell", say)
},

var Girls = [
  {WorkoutType: "20 minute Amrap", Name: "Cindy", Movements: "5 Pull ups, 10 push ups, 15 squats", Weight: "Bodyweight"},
  {WorkoutType: "For time workout", Name: "Fran", Movements: "21, 15, 9 of each movement thrusters and pull ups.", Weight: "95 pounds"},
  {WorkoutType: "For time workout", Name: "Annie", Movements: "50, 40, 30, 20, 10 of each movement double unders and sit ups.", Weight: "bodyweight"}
];

console.log(GirlsIntent);
