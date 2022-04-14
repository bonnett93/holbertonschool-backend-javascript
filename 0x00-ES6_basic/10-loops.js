export default function appendToEachArrayValue(array, appendString) {
  const new_array = [];
  for (const string of array) {
    new_array.push(appendString + string);
  }

  return new_array;
}
