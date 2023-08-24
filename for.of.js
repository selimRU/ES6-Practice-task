// using for
const people = [
    {
        name: 'mena', age: 20
    },
    {
        name: 'rina', age: 15
    },
    {
        name: 'shuchoritaF', age: 22
    }
]
let sum = 0;
for (const num of people) {
    sum += num.age
}
console.log(sum);

// using reduce
const sum2 = people.reduce((p, c) => p + c.age, 0)
console.log(sum2);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);