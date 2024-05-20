const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(student) {
  // Start coding here
  return student.reduce(
    (totalAverage, average) => totalAverage + average.score / student.length,
    0
  );
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));
