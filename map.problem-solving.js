const oddArray = [1, 3, 5, 7, 9];
// for (let i = 0; i < oddArray.length; i++) {
//     let evenNumber = oddArray[i] + 1;
//     console.log(evenNumber);
// }
// for (const num of oddArray) {
//     const evenNumber = num + 1;
//     console.log(evenNumber);
// }
const evenNumber = oddArray.map(num => num + 1)
console.log(evenNumber);