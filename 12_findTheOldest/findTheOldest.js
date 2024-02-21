const findTheOldest = function(people) {
    people.map((item) => {
        if(!item.yearOfDeath){
            item.lived = (new Date().getFullYear()) - item.yearOfBirth
        }else{
            item.lived = item.yearOfDeath - item.yearOfBirth
        }
    })

    let sorted = people.sort((a,b) => a.lived > b.lived ? 1 : -1)
    return sorted[sorted.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
