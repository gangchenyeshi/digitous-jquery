// boucle for : function qui prend un param n et qui retourne la somme des entier de 1 à N
// fibonaci
// n = 5 => 1 + 2 + 3 + 4 + 5 => 15
 /*
function recursivity(n) {
    
    var finalsum = 0;
    for(var i=0; i<=n; i++) {
        
        finalsum = finalsum + i;
        console.log(`result of finalsum : ${finalsum}`);
    }
    console.log(finalsum)
}
recursivity(5);
*/
//FIBONACI
//n = 5 => 1 + 2 + 3 + 4 + 5 => 15
//fibonaci(n) =  fibonaci(n - 1) + n
//fibonaci(1) = 1
function fibonacirecursivity(n) {
    
    if(n === 1) {
        return 1;
    }
        return fibonacirecursivity(n - 1) + n;
}
console.log(fibonacirecursivity(5));