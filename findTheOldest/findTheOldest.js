const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ]

let findTheOldest = function(people) {
    
    let tester = [0, 0, 0];

    for(let i = 0; i < 3; i++){
        tester[i] = people[i];
    };
    
    let testerSort = tester.sort(function(a, b){
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return false;
        } else {
            return true;
        }
    })

    return tester;
}

module.exports = findTheOldest
