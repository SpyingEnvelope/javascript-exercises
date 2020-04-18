let findTheOldest = function(people) {

    let isAlive = people.some(function(person){
        const currentYear = (new Date()).getFullYear();
        if(people.yearOfDeath == undefined){
            return true;
        }
    })

        people.sort(function(a, b){
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return -1;
        } else {
            return 1;
        }
    })

    if(isAlive === true){
        people[0].yearOfDeath = (new Date()).getFullYear();
        people.sort(function(a, b){
            if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
                return -1;
            } else {
                return 1;
            }
        })
    }

    return people[0];
}

module.exports = findTheOldest
