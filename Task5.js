let arr = [1, 2, 3, 1, 2, 3, 4, 5];
let longest = []; 
let current = [];

for (let i = 0; i < arr.length; i++) {
    let exists = false; 

    for (let j = 0; j < current.length; j++) {
        if (arr[i] === current[j]) {
            exists = true; 
            break;
        }
    }

    if (exists) {
    
        if (current.length > longest.length) {
            longest = current; 
        }
     
        current = [arr[i]]; 
    } else {
        current[current.length] = arr[i];
    }
}


if (current.length > longest.length) {
    longest = current;
}

console.log(longest);


