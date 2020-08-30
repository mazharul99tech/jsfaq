function callBack(name, age, task){
    task();
    console.log("Hello", name);
    console.log("Your age", age);
}

function washHand(){
    console.log("Please Wash Your Hand Immediately");
}
function takeShower(){
    console.log("Take a Shower please ")
}
function scrollFacebook(){
    console.log("Don't scrolling facebook all time please");
}
callBack("Mazharul", 23, washHand);
callBack("Tareq", 21, takeShower);
callBack("Mazharultech", 34, scrollFacebook);