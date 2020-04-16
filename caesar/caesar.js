const caesar = function(a, b) {
    let aArray = a.split('');

    for (let i = 0; i < aArray.length; i++) {
        if(aArray[i] >= 'A' && aArray[i] <= 'Z' || aArray[i] >= 'a' && aArray[i] <= 'z' ){
          let replaceLetter = aArray[i].charCodeAt();
          let replaceLetterCalc = replaceLetter + b;
          if(replaceLetterCalc > 65 && replaceLetterCalc < 90 || replaceLetterCalc > 97 && replaceLetterCalc < 122) {
              replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
              aArray[i] = replaceLetterCalc;
        }
          else if (replaceLetterCalc < 65){
            let aLoop = 65 - replaceLetterCalc;
            replaceLetterCalc =  91 - aLoop;
            replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
            aArray[i] = replaceLetterCalc;
        }
          else if (replaceLetterCalc > 90 && replaceLetterCalc < 97) {
            capitalZLoop = replaceLetterCalc - 90;
            replaceLetterCalc = 64 + capitalZLoop;
            replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
            aArray[i] = replaceLetterCalc;
        }
          else if (replaceLetterCalc < 97){}
        };
    };

    aArray = aArray.join('');
    return aArray;

}

let a = 'W';
a = a.charCodeAt();
console.log(a);
//a++
//a = String.fromCharCode(a);
//console.log(a);

// charCode range for alphabetical letters: A(65) - Z(90) 
// and a(97) - z(122)

//let arrayTest = 'This is an array!'
//arrayTest = arrayTest.split('');
//arrayTest = arrayTest.join('');

module.exports = caesar
