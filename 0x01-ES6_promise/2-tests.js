import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise)
.then(val => console.log(`resolve response: ${val}`));

const promise1 = Promise.reject(new Error());
handleResponseFromAPI(promise1)
.then(val => console.log(`reject response: ${val}`));
