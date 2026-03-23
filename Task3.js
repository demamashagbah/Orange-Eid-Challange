let arr = [7,1,5,3,6,4]
let minPrice = arr[0];
let maxProfit = 0;

for ( i = 0 ; i < arr.length ; i ++ ){

    if(arr[i] < minPrice){
        minPrice = arr[i];
    }
    if(arr[i] != minPrice ){
       if( arr[i] - minPrice > maxProfit  ){
           maxProfit = arr[i] - minPrice;
       }
    }
    
    
}
console.log(maxProfit)