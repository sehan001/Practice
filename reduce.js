// let a = ["e", "h", "a", "n"];
// console.log(a.reduce((acc, curr) => acc + curr, "s+"));
const courses = [
  { course: "JavaScript Fundamentals", price: 100 },
  { course: "Advanced React", price: 150 },
  { course: "Node.js Essentials", price: 120 },
  { course: "CSS Grid and Flexbox", price: 80 },
  { course: "Full-Stack Development", price: 200 },
  { course: "Introduction to Python", price: 90 },
];
let b = courses.reduce((acc, { course, price }) => {
  return acc + price;
}, 0);
console.log(b);
