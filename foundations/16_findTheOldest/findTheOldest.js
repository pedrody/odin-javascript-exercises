const findTheOldest = function(people) {
    people.sort((a, b) => {
        a.yearOfDeath = a.yearOfDeath === undefined ? new Date().getFullYear() : a.yearOfDeath;
        b.yearOfDeath = b.yearOfDeath === undefined ? new Date().getFullYear() : b.yearOfDeath;

        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })
        
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
