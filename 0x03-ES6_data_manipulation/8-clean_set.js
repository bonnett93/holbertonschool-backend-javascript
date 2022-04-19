export default function cleanSet(mySet, startString) {
  if (startString.length === 0) return '';
  const sliceStart = startString.length;
  const myArray = [...mySet]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(sliceStart));
  return myArray.join('-');
}
