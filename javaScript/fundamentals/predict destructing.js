/* 01 */
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)

// this will print Tesla, and mercedes
// since it takes the arguments based on order


/* 02 */
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// console.log(name);
// console.log(otherName);

// console.log(name); will give an error name undefined
// console.log(otherName); will print Elon

/* 03 */
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);


// console.log(password); will print 12345
// console.log(hashedPassword); will print undefined


/* 04 */
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second);
console.log(first == third);



// console.log(first == second); will print False
// console.log(first == third); will print True

/* 05 */
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// console.log(key); will print 'value'
// console.log(secondKey); will print [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]); will print 1
// console.log(willThisWork); will print 5

