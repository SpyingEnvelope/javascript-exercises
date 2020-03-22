const repeatString = function() {
    let stringHey = "";
    for (i = 0; i < 3; i--) {
        if (i >= 0) {
            stringHey += "hey";
        }
        else {
            stringHey = "ERROR";
            break;
        }
          
    }

    return stringHey;

}

module.exports = repeatString
