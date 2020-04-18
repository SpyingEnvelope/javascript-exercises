let findTheOldest = function(people) {
    
  let tester = [0, 0, 0];

  for(let i = 0; i < 3; i++){
      tester[i] = people[i];
  };
  
  let testerSort = tester.sort(function(a, b){
      if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
          return -1;
      } else {
          return 1;
      }
  })

  return tester[0];
}

module.exports = findTheOldest