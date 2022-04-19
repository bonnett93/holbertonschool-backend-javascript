export default function getStudentIdsSum(studentsList) {
  const initialValue = 0;
  return studentsList.reduce(
    (previousValue, currentStudent) => previousValue + currentStudent.id,
    initialValue,
  );
}
