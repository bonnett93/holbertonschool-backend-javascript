export default function cleanSet(mySet, startString) {
  const sliceStart = startString.length;
  const myArray = [...mySet]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(sliceStart));
  return myArray.join('-');
}
