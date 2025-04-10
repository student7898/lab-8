// Part 1
let student = {
    name: 'John Doe',
    age: 20,
    enrolled: true,
    courses: ['Math', 'Science', 'History'],
    displayInfo: function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Enrolled: " + this.enrolled);
        console.log("Courses: " + this.courses.join(", "));
    }
}

console.log(student.name);
console.log(student.age);
student.displayInfo();

// Part 2
let studentJSON = JSON.stringify(student);
console.log(studentJSON);
let studentObj = JSON.parse(studentJSON);
console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.enrolled);
console.log(studentObj.courses);
console.log(studentObj.displayInfo);

console.log(student.name);
console.log(student.age);
console.log(student.enrolled);
console.log(student.courses);
console.log(student.displayInfo);

// Seems to be the case that functions do not get retrieved when converting an object in JSON back to an Object.

// Part 3
let {name , courses} = student;
console.log(name);
console.log(courses);

let scores = [90, 85, 92];
let [math, science] = scores;
console.log(math, science);

// Part 4
let studentClone = {...student, ...{graduationYear: 2023}};
console.log(studentClone);

let newCourses = ['English', 'Art'];
student.courses =  [...student.courses, ...newCourses];
console.log(student.courses);