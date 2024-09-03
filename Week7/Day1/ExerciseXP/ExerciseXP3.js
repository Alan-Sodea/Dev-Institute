// Promise that resolves with a value of 3
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(value => console.log(value));

// Promise that rejects with the string "Boo!"
const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => console.log(error));
