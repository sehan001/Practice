let a = document.querySelector("#btn");
let mode = "light";
a.addEventListener("click", () => {
  if (mode === "light") {
    document.body.style.backgroundColor = "black"; // Corrected syntax
    mode = "dark"; // Update mode variable
  } else {
    document.body.style.backgroundColor = "white"; // Corrected syntax
    mode = "light"; // Update mode variable
  }
});
