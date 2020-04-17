const caesar = function(a, b) {
    let aArray = a.split('');

    for (let i = 0; i < aArray.length; i++) {
        if(aArray[i] >= 'A' && aArray[i] <= 'Z' || aArray[i] >= 'a' && aArray[i] <= 'z' ){
          let replaceLetter = aArray[i].charCodeAt();
          let replaceLetterCalc = replaceLetter + b;
          if(replaceLetterCalc < 97 && replaceLetter >= 97 && replaceLetter <= 122 || replaceLetterCalc < 65 && replaceLetter >= 97 && replaceLetter <= 122){
            for(;replaceLetterCalc < 97;){
              let negativeShift2 = 97 - replaceLetterCalc;
              replaceLetterCalc = 123 - negativeShift2;
            }
            replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
            aArray[i] = replaceLetterCalc;
          }
          else if(replaceLetterCalc > 65 && replaceLetterCalc < 90 || replaceLetterCalc > 97 && replaceLetterCalc < 122) {
              replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
              aArray[i] = replaceLetterCalc;
        }
        else if(replaceLetterCalc < 65 && replaceLetter >= 65 && replaceLetter <= 90) {
          for (;replaceLetterCalc < 65;){
            let negativeShift = 65 - replaceLetterCalc;
            replaceLetterCalc = 91 - negativeShift;
          }
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
          else if (replaceLetterCalc < 97){
            let smallALoop = 97 - replaceLetterCalc;
            replaceLetterCalc = 123 - smallALoop;
            replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
            aArray[i] = replaceLetterCalc;
          }
          else if(replaceLetterCalc > 122 && replaceLetter >= 97 && replaceLetter <= 122) {
            lowerZLoop = replaceLetterCalc - 123;
            if (lowerZLoop >= 26 && replaceLetter >= 97 && replaceLetter <= 122){
              for (; lowerZLoop >= 26;){
                let loopCreate = 97 + lowerZLoop;
                lowerZLoop = loopCreate - 123;
              } 
            }
            replaceLetterCalc  = 97 + lowerZLoop;
            replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
            aArray[i] = replaceLetterCalc;
          }
          else if(replaceLetterCalc > 122 && replaceLetter >= 65 && replaceLetter <= 90){
            capitalZLoop = replaceLetterCalc - 91;
            if (capitalZLoop >= 26 && replaceLetter >= 65 && replaceLetter <= 90){
              for (; capitalZLoop >= 26;){
                let loopCreate = 65 + capitalZLoop;
                capitalZLoop = loopCreate - 91;
              } 
            }
            replaceLetterCalc = 65 + capitalZLoop;
           replaceLetterCalc = String.fromCharCode(replaceLetterCalc);
            aArray[i] = replaceLetterCalc;
          }
        };
    };

    aArray = aArray.join('');
    return aArray;

}

let a = 'H';
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
