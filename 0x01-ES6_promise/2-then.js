export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally('Js has new concepts, some easy to understand, others not so much, but applying them to guides can be complex and unintuitive.');
}
