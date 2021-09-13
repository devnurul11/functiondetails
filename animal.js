function animalCal(depth){
animalTotal = 0;
if (depth <= 10 ) {
    animalTotal = depth * 50;
}

else if( depth <= 20){
    var first10 = 10 * 50;
    var remainingDepth = depth -10;
    var secondStep = remainingDepth *100;
    animalTotal = first10 + secondStep;
 }

else {
    var first10 = 10 * 50;
    var secondStep = 10* 100;
    var remainingdepth3 = depth-20;
    var thirdStep = remainingdepth3*300;
    animalTotal = first10 +secondStep + thirdStep; 
}
return animalTotal
}
console.log(animalCal(21));

// function animalCalculator(depth){
// var animal = 0;
// if (depth <= 10) {
//      animal = depth*50;
// }
// else if (depth <= 20) {
//     var firstSteps = 10*50;
//     var remainingDepth = (depth-10);
//     var secondPart = remainingDepth * 100;
//     animal = firstSteps + secondPart;
// } 
// else{
//     var firstSteps = 10*50;
//     var secondPart = 10*100;
//     var remainingDepth3 = depth-20;
//     var thirdPart = remainingDepth3*300;
//     animal = firstSteps + secondPart + thirdPart;
// }
//     return animal
// }

// console.log(animalCalculator(22));

