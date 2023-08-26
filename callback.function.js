// function callbackFunction(parameter) {
//     // Your code here
//     console.log(parameter);
// }

// function higherOrderFunction(callback) {
//     // Do some work
//     console.log("Higher order function is working...");
//     callback("Callback executed!");
// }

// higherOrderFunction(callbackFunction);

// function fetchDataFromServer(callback) {
//     setTimeout(function() {
//         const data = { message: "Data from server" };
//         callback(data);
//     }, 2000); // Simulating a delay of 2 seconds
// }

// fetchDataFromServer(function(result) {
//     console.log(result);
// });
let result = 5;
if (!!result) {
    console.log("This is truthy.");
}else{
    console.log('falsy');
}
