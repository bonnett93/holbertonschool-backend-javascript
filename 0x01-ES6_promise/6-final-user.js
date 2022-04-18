import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const allsesponses = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  /* return allsesponses.then((val) => console.log(val)) */
  return allsesponses;
}
