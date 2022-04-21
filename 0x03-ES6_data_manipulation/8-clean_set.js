export default function cleanSet(mySet, startString) {
  if (!(startString) || startString.length === 0) return '';
  const sliceStart = startString.length;
  const myArray = [...mySet]
    .filter((string) => (string ? string.startsWith(startString) : false))
    .map((string) => string.slice(sliceStart));
  return myArray.join('-');
}
