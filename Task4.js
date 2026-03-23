let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
let totalWater = 0;

for ( let i = 1 ; i < arr.length ; i++ ){
    let maxLeft = 0;
    let maxRight = 0;
    for ( let j = i; j < arr.length ; j++ ){
        if(arr[j] > maxRight){
        maxRight = arr[j];
    }
    }
    for(let j = i ; j >= 0 ; j--){
         if(arr[j] > maxLeft){
        maxLeft = arr[j];
    }
         waterAtI = Math.min(maxLeft , maxRight) - arr[i];
    }
    if (waterAtI > 0) {
        totalWater += waterAtI;
    }
   
   
}
console.log( totalWater )