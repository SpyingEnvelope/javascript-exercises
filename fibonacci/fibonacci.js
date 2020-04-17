const fibonacci = function(a) {
    let myArray = [0, 1, 1];

    a = a * 1;
    
    if(a < 0){
        return 'OOPS';
    }

    for(let i = 3; i <= a; i++){
        myArray.push(myArray[i - 2] + myArray[i - 1]);
    }

    a = myArray[a];

    return a;
}

module.exports = fibonacci
