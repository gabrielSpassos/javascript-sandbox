function main() {
    return 25;
}

function minBoatsOptimal(people, limit) {
    let boats = 0;
    const maxPeopleOnBoat = 2;
    let travelled = Array(people.length).fill(false);

    let orderPeople = people.sort();
    for(let i = 0; i < orderPeople.length; i++) {
        let peopleOnBoat = 0;
        if (travelled[i]) {
            continue;
        }
        travelled[i] = true;
        boats++;
        peopleOnBoat++;
        for (let j = i + 1; j < orderPeople.length; j++) {
            if (travelled[j]) {
                continue;
            }
            let sumedWeight = orderPeople[i] + orderPeople[j];
            if (sumedWeight <= limit && peopleOnBoat <= maxPeopleOnBoat) {
                peopleOnBoat++;
                travelled[j] = true;
            }
        }
    }

    return boats;
}

function minBoats(people, limit) {
    let boats = 0;
    const maxPeopleOnBoat = 2;
    let travelled = Array(people.length).fill(false);

    for(let i = 0; i < people.length; i++) {
        let peopleOnBoat = 0;
        if (travelled[i]) {
            continue;
        }
        travelled[i] = true;
        boats++;
        peopleOnBoat++;
        for (let j = i + 1; j < people.length; j++) {
            if (travelled[j]) {
                continue;
            }
            let sumedWeight = people[i] + people[j];
            if (sumedWeight <= limit && peopleOnBoat <= maxPeopleOnBoat) {
                peopleOnBoat++;
                travelled[j] = true;
            }
        }
    }
    return boats;
}

module.exports = { main, minBoats, minBoatsOptimal };

console.log(main());  // Output should be 42