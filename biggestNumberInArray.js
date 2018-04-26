(function () {

    //this is the array
    let array = [4, 5, 66, 7, 8, 88, 2000, 289, 1, 0];
    //run a function to find the biggest number in the array
    function findBiggestNumber(arr) {
        let biggestNumber;
        // run a loop as long as the array
        for (i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];
            // the first number is the biggest number
            if (i === 0) {
                biggestNumber = currentNumber;
            }
            // is the current number bigger than the biggest number
            // if it is keep looping
            else {
                if (currentNumber > biggestNumber) {
                    biggestNumber = currentNumber;
                }
            }
        }
        return biggestNumber;
    }
    let biggestInteger = findBiggestNumber(array);
    console.log(biggestInteger);
})();
