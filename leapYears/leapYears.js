const leapYears = function(a) {
    let b;

    if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
        b = true;
        return b;
    } else {
        b = false;
        return b;
    }

}

module.exports = leapYears
