    
function brickCalculator(roof){
    var totalBricks = 0;
    if (roof <= 10) {
        var first10 = roof * 15 * 1000;
        totalBricks = first10;
    }
    else if (roof <= 20){
        var first10 = 10 * 15 * 1000;
        var remaining2ndRoof = roof -10;
        var secound10 = remaining2ndRoof * 12 * 1000;
        totalBricks = secound10 + first10;
    }
    else{
        var first10 = 10 * 15 * 1000;
        var secound10 = 10 * 12 * 1000;
        var remainingMoreThen20 = roof - 20;
        var moreThen20 = remainingMoreThen20 * 10 * 1000;
        totalBricks = first10 + secound10 + moreThen20;
    }
    return totalBricks;
}

var results = brickCalculator(21);
console.log(results);