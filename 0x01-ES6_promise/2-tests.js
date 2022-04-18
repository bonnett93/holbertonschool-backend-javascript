import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const successResponse = handleResponseFromAPI(promise);
console.log(successResponse.resolve);

const promise1 = Promise.reject(new Error());
const successResponse1 = handleResponseFromAPI(promise1);
console.log(successResponse1.resolve);
