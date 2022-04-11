let names = ['matheus', 'mts', 'theus', 'ma'];

//forEach
names.forEach((name) => console.log(`the name is: ${name}`));

// <!-------------------------

//map
let numbers = [1, 2, 3, 4, 5];
let triple = numbers.map(function (number) {
    return number * 3;
});
console.log(`the triple is: ${triple}`);

// <!-------------------------

//filter
let prof = [
    { name: 'João', profession: 'Engineer of Computing', initials: 'ENGCOMP', experienceInYears: 1 },
    { name: 'Joaquim', profession: 'Engineer Ambiental', initials: 'ENGAMB', experienceInYears: 3 },
    { name: 'Maria', profession: 'Engineer of Computing', initials: 'ENGCOMP', experienceInYears: 2 },
    { name: 'Rafael', profession: 'physicist', initials: 'PHYSICIST', experienceInYears: 5 },
    { name: 'Larissa', profession: 'Engineer of Computing', initials: 'ENGCOMP', experienceInYears: 4 }
];
let compEngineer = prof.filter(function (professional) {
    return professional.initials === 'ENGCOMP' && professional.experienceInYears === 2;
});
console.log(compEngineer);

// <!-------------------------

//find
let cars = ['Ferrari', 'Fusca', 'Palio', 'Uno of the Firma', 'Camaro', 'Gol'];
let car = cars.find(function(carr){
    return carr === 'Uno of the Firma';
});
console.log(car);

// <!--------------------------

//every
let students = [
    {name: 'mts', age: 21},
    {name: 'gerson', age: 18},
    {name: 'robson', age: 24},
    {name: 'marcela', age: 29}
];
let underage = students.every(function(student){
    return student.age >= 18;
});
console.log(underage);

// <!--------------------------

//some
let drivers = [
    {name:'Nick', age:15},
    {name:'Julian', age:17},
    {name:'Hinata', age:20},
    {name:'Nicollo', age:14}
];
let beDriver = drivers.some(function(driver){
    return driver.age >= 18;
});
console.log(beDriver);

// <!--------------------------

let ages = [13,14,23,77];
let sum = 0;
    sum = ages.reduce(function(sum, age){
        return sum + age;
    });
console.log(sum);