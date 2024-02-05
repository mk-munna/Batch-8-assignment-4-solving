
function canPay(changeArr, price) {
    // check the array is empty or not. if it's empty , it will return error message.
    if (changeArr.length === 0) { 
        return 'Your array is empty'
    }
    // total amount of array
    let total = 0;
    for (khuchra of changeArr) {
        total += khuchra;
    }
    // if total amout of array is equal or bigger than price it will return true
    if (total === price || total > price ) {
        return true;
        
    } else {
            return false;
        }

}

console.log(canPay([1, 3, 4, 5], 10));
console.log(canPay([], 10));
