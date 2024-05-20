const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];


let result = students.reduce(function (accumulator, cerr) {
  return accumulator + cerr.score;
}, 0);
console.log(result/students.length)
// getAverageStudentScore(students); // Output: 87.5






