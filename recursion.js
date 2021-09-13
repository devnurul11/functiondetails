
// function factorial(num){
//     var factorialNumber = 1;
//     for (let i = 1; i <=num ; i++) {
//          factorialNumber *= i; 
//     }
//     return factorialNumber
// }

// function factorialRecursive(num){
//     if (num == 1) {
//         return 1;
//     }
//     else{
//         return num* factorialRecursive(num-1)
//     }
// }

// console.log(factorialRecursive(5));

// factorial = 6!= 6*5*4*3*2*1
// 1! = 1

function recursion (num){

    for (let i = 0; i <= num; i++) {
            if (num == 1) {
                return 1;
            }
            else{
                return num * recursion(num-1)
            }
    }
}
var result = recursion(6);
console.log(result);