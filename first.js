let length = 12;
let a = "";
let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < 12; i++) {
  let char = Math.floor(Math.random() * (str.length + 1));
  // console.log(char);
  a = a + str.charAt(char);
}

console.log(a);
