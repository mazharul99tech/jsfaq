function evenify(num) {
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
       result = num*2;
    }
    return result;
}

var result = evenify(13);
var square = result * result;
console.log("square ",square);

function evenifyAll(nums){
    var evenArray = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        evenArray.push(result);
    }
    return evenArray;
}

var nums = [13, 24, 89, 10, 5, 7, 20];
var numsEven = evenifyAll(nums);
console.log(numsEven);



var friendAge = [10, 13, 15, 23, 45, 24, 20];
var result = evenifyAll(friendAge);
console.log(result);

var date = new Date(1999-05-18);
console.log(date);