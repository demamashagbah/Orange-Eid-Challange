let arr = [1,4,20,3,10,5]
let start ;
let target = 33 ;

for (i = 0 ; i < arr.length ; i++ )
{
    let current_sum = 0;
    for (let j = i ; j < arr.length ; j++ ){
        let start = i;
        current_sum += arr[j];
        if(current_sum == target){
            console.log(`start = ${i}, end = ${j}`)
            return;
        }
        else if (current_sum > target )  {
            break;
        }
    }
}