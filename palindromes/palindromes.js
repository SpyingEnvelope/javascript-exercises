let palindromes = function(a) {
    b = a.toUpperCase();
    b = b.split('');

    let splitString = a.toUpperCase();
    splitString = splitString.split('');
    splitString = splitString.reverse();

    let stringFilter = splitString.filter(function(a) {
        if(a >= 'A' && a <= 'Z') {
            return true;
        } else {
            return false;
        }
    });

    let bFilter = b.filter(function(a) {
        if (a >= 'A' && a <= 'Z') {
            return true;
        } else {
            return false;
        }
    })

    stringFilter = stringFilter.join();
    bFilter = bFilter.join();

    if (bFilter === stringFilter) {
        return true;
    } else {
       return false
    }

}

module.exports = palindromes
