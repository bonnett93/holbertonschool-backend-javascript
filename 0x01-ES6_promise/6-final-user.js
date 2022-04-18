import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const allresponses = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return allresponses.then((promises) => {
    const promiseArray = [];
    promises.forEach((response) => {
      if (response.status === 'rejected') {
        response.value = response.reason.toString();
      }
      const { status } = response;
      const { value } = response;
      promiseArray.push({ status, value });
    });
    return promiseArray;
  });
}
