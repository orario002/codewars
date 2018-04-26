//to find the lowest integer in an array

let myArray = [7,4,5,6,7,5,4,3,1,99,567];

function myFunction(arr){
    let lowestNumber;
    for (i = 0; i < myArray.length; i++) {
        let currentNumber = myArray[i];
        
        if (i === 0) {
            lowestNumber = currentNumber;
        } else {
            if (currentNumber < lowestNumber) {
                lowestNumber = currentNumber;
            }
        }
    }
    
    return lowestNumber;
}

let smallestInteger = myFunction(myArray);

console.log('the smallest int is: ' + smallestInteger);

