// var depth = 35;
// animalTotal = 0;
// if (depth <= 10 ) {
//     animal = depth * 50;
// }
// else if( depth <= 20){
//     var first10 = 10*50;
//     var remainingDepth = depth -10;
//     var totalTo20 = first10 + remainingDepth*100;
// }
// else {
//     var more20 = (depth-20)*300;
//     animalTotal = more20 + totalTo20;
// }
// console.log(animalTotal);

function animalCalculator(depth){
var animal = 0;
if (depth <= 10) {
     animal = depth*50;
}
else if (depth <= 20) {
    var firstSteps = 10*50;
    var remainingDepth = (depth-10);
    var secondPart = remainingDepth * 100;
    animal = firstSteps + secondPart;
} 
else{
    var firstSteps = 10*50;
    var secondPart = 10*100;
    var remainingDepth3 = depth-20;
    var thirdPart = remainingDepth3*300;
    animal = firstSteps + secondPart + thirdPart;
}
    return animal
}

console.log(animalCalculator(22));

