
let students = [
    {
        name: "Gaurav",
        marks: 99
    },
    {
        name: "Harsh",
        marks: 98
    },
    {
        name: "Vivek",
        marks: 97
    }
];

// Add New Student
students.push({
    name: "Tejas",
    marks: 100
});

// Variables
let totalMarks = 0;
let highestMarks = 0;

// Display Student Details and Calculate Total
students.forEach(function(student) {

    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks);

    totalMarks = totalMarks + student.marks;

    if (student.marks > highestMarks) {
        highestMarks = student.marks;
    }
});

// Total and Average
let averageMarks = totalMarks / students.length;

console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);
console.log("Highest Marks: " + highestMarks);

// some()
let hasTopper = students.some(function(student) {
    return student.marks >= 90;
});

console.log("Has Topper: " + hasTopper);

// every()
let allPassed = students.every(function(student) {
    return student.marks >= 97;
});

console.log("All Students Passed: " + allPassed);

// filter()
let goodStudents = students.filter(function(student) {
    return student.marks >= 75;
});

console.log("Students scoring 75 or above:");
console.log(goodStudents);

// map()
let studentNames = students.map(function(student) {
    return student.name;
});

console.log("Student Names:");
console.log(studentNames);

// find()
let searchStudent = students.find(function(student) {
    return student.name === "Tejas";
});

console.log("Searched Student:");
console.log(searchStudent);
