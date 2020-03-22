const sumAll = function(a, b) {
    if ( a < 0 || b < 0) {
        a = "ERROR";
        return a;
    }
    else if (typeof a != "number" || typeof b != "number") {
        a = "ERROR";
        return a;
    }
    else if (a < b) {
      for (let i = a + 1; i <= b; i++) {
          a = a + i;
      }
      return a;
    } else if ( a > b) {
        for (let i = b + 1; i <= a; i++) {
            b = b + i;
      }
      return b;
    }
   

}

module.exports = sumAll
