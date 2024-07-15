// prompt key word
// let a = prompt("enter the expresession:");
// console.log(eval(a));
//`for of` loop exlanation
// let a = "sehan";
// for (let i of a) { // for of loop
//   console.log(i);
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.splice(2, 2, 101, 102);
// // document.write(a);
// a.unshift(2121);
// b=a.shift(1);
// document.write(b);
// sum = (a, b) => {
//   return a + b;
// };
// a=sum(1,10)
// document.write(a)
// a = [1, 2, 3, 4, 5];
// a.forEach((e, idx) => {
//   document.write(e);
// });
// a.forEach();
// important array function in modern javascript
//map function
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// a.map((every) => {
//   if (every > 5) document.write(every);
//   else document.write("ok");
// });
// let a=[1,2,3,4,5,6,7,8,9];
// a.filter((val)=>{
//   if(val>3) document.write(val*2);
//   else document.write("ok")

// })
// let a=[1,2,3,4,5,6];
// b=a.reduce((cur,nxt)=>{
//   return cur+nxt;
// })
// document.write(b)
// let q = document.querySelector("h1");
// // document.write(q);
// console.log(q);
// let a = document.querySelector("#sehan");
// a.innerHTML = "you cant see me";
// document.getElementById("changeButton").addEventListener("click", function () {
//   let box1 = document.getElementById("box1");
//   box1.setAttribute("id", "box2");
//   let box2 = document.getElementById("box2");
//   box2.setAttribute("id", "box1");
// });
// let a = document.createElement("h1");
// a.innerHTML = "hello";
// document.querySelector("body").prepend(a);
// a.remove();0
// function afunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("getting data-1");
// let p1 = afunc();
// p1.then((res) => {
//   console.log(res);
// });
const a = "https://cat-fact.herokuapp.com/facts";
const l = document.querySelector(".data");
const getfacts = async () => {
  let response = await fetch(a);
  let data = await response.json();
  data.map((otpt) => {
    l.innerText += otpt.text + "\n";
  });
};
