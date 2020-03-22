const reverseString = function() {
  let initial = "123! abc!";
  let splitString = initial.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");
  return joinString;

}

module.exports = reverseString
