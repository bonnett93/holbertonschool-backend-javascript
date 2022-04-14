export default function createIteratorObject(report) {
  const employeeslist = [];
  for (const department of Object.keys(report.allEmployees)) {
    employeeslist.push(...report.allEmployees[department]);
  }
  return employeeslist;
}
