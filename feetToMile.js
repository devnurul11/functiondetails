function feetToMile(feet) {
    var mile = feet / 4980;                
    return mile;                  
}
 var result = feetToMile(15487);
console.log(result);

function woodCalculator(ch, table, bed){
    var chiar = ch* 1;
    var tab = table * 3;
    var khat = bed * 5;
    var results = chiar + tab + khat;

    return results;
}
 
var total = woodCalculator( 2 , 2, 2);
console.log(total);

function brickcalculator (n){
    if(n <=10 ){
        return n* 15 *1000;
    }
      if( n > 10 && n <=20){

            return 15000 * 10 + (n-10)*1000*12;
        }
    if (n > 20){

        var inf = 15000 * 10 + 10 * 12000 + (n-20) * 1000 * 10 ;
        return inf;
    }
}
var total_brick = brickcalculator(23)
console.log(total_brick);

