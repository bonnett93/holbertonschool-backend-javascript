export default function handleResponseFromAPI(promise) {
  let success;
  console.log('Got a response from the API');
  promise.then(() => ({ status: 200, body: success }), () => new Error());
}
