interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1 : Student = {
	firstName: "Jordan",
	lastName: "Bonnett",
	age: 92,
	location: "Earth",
}

const student2 : Student = {
	firstName: "Nadroj",
	lastName: "Ttennob",
	age: 29,
	location: "Mars",
}

const myStudents: Array<Student> = [student1, student2];
