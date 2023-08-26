// function outerFunction(ouParam) {
//     return function innerFunction(inParam) {
//         console.log(inParam, ouParam);
//     }

// }
// const closurResult = outerFunction('outer param')
// closurResult('inner param');

// function add(a, b) {
//     const sum = a + b;
//    return function multi(c){
//         const mul = sum * c;
//         return mul
//     }
// }
// const  result = add(2,4)
// console.log(result(2));

function hello() {
    console.log('hello baby');
    return function baby() {
        console.log('good morning');
    }
}
const result = hello()
result();
