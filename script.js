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

