let arr = [1,2,3,4]
let product = 1;
let new_arr =[];
for ( let i = 0 ; i < arr.length ; i++ ){
    for( let j = 0 ; j < arr.length ; j++ ){
        if(arr[i] == arr[j]){
            continue;
        }
        else{
            product *= arr[j];
        }
    
    }
    new_arr[i]= product ;
    product =1 ;
}
console.log(new_arr)
