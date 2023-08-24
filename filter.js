// #1
const array = [33, 50, 79, 78, 90, 101, 30];

const filtered = array.filter(num => num % 10 === 0)
console.log(filtered);

// #2
const instructors = [
    {
        name: 'nodi', age: 28, position: 'senior'
    },
    {
        name: 'akil', age: 26, position: 'junior'
    },
    {
        name: 'shobuj', age: 30, position: 'senior'
    }
]
let senior = [];
instructors.filter(instructor => {
    if (instructor.age > 26) {
        senior.push(instructor.name)
    }
});
console.log(senior);