// ZAD 1
const stringHello = `Hello`;
const stringWorld = `world`;
const stringAll = `${stringHello} ${stringWorld}`;

// ZAD 2
const multiply = ((x, y=1) =>  { return x * y});

//ZAD 3
const average = (...args) => args.reduce((x, y) => x + y) / args.length; 

//ZAD 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//ZAD 5
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [, , third, , fifth] = names;