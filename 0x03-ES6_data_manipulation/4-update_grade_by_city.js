export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const localStudents = studentsList.filter((student) => student.location === city);
  return localStudents.map((student) => {
    const grade = newGrades.filter((stu) => stu.studentId === student.id)[0];
    if (grade) student.grade = grade.grade; // eslint-disable-line no-param-reassign
    else student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    return student;
  });
}
