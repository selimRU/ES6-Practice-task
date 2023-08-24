// #1
const output = num => num % 5;
console.log(output(24));
// #2
const output2 = (num1, num2) => {
    const add = num1 + num2;
    const multi = num1 * num2 * add;
    return multi
};
console.log(output2(24, 25));
// #3
const output3 = (num1, num2, num3) => num1 * num2 * num3;
console.log(output3(24, 25, 23));
// #4
const output4 = (num1, num2) => (num1 + num2) * (num1 * num2);
console.log(output4(24, 25));

// #5
const numbers = [2, 3, 4, 5, 6, 77, 8, 9, 12, 20, 25, 31]
let result = [];
numbers.map(number => {
    if (number % 5 === 0) {
        const multiBy5 = number * 5;
        result.push(multiBy5)
    }
});
console.log(result);

// #5
const numbers2 = [2, 3, 4, 5, 6, 77, 8, 9, 12, 20, 25, 31];
const odd = [];
numbers2.filter(num => {
    if (num % 2 === 1) {
        odd.push(num)
    }
})
console.log(odd);
// #6
const products = [
    { name: 'Product A', price: 2000 },
    { name: 'Product B', price: 3000 },
    { name: 'Product C', price: 4000 },
    { name: 'Product D', price: 5000 },
];
products.find(product => {
    if (product.price === 5000) {
        console.log(product);
    }
})
// #7
const products2 = [
    { name: 'Product A', price: 2000 },
    { name: 'Product B', price: 3000 },
    { name: 'Product C', price: 4000 },
    { name: 'Product D', price: 5000 },
];
products2.map(product => {
    const { name, price } = product;
    console.log(name, price);
})
const numbers3 = [2, 3, 4, 5, 6];
const [one, two, three, four, five] = numbers3
console.log('three:', four);
// #8
const sum = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(sum(5, 8));