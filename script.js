const people = [
    {
        name: "Juan",
        yearOfBirth: 1990,
        yearOfDeath: 2020,
    },
    {
        name: "Pedro",
        yearOfBirth: 1964,
        yearOfDeath: 2015,
    },
    {
        name: "Mariana",
        yearOfBirth: 1923,
        yearOfDeath: 2011,
    },
    {
        name: "Luis",
        yearOfBirth: 1956,
        yearOfDeath: 2022,
    },
    {
        name: "Agustina",
        yearOfBirth: 1935,
        yearOfDeath: 2019,
    },
];

function findTheOldest(people) {
    const oldest = people.reduce((oldest, person) => {
        const currentAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        return currentAge > oldestAge ? person : oldest;
    });
    return oldest;
}
console.log(findTheOldest(people));