export default function appendToEachArrayValue(array, appendString) {
  for (const string of array) {
    array.shift();
    array.push(appendString + string);
  }

  return array;
}
