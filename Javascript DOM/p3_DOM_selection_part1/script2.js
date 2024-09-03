// DOM Selection

// document.querySelector() -> mengembalikan element
// query -> menanyakan, selector -> selector pada CSS
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// document.querySelectorAll() -> mengembalikan NodeList
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// Mengubah Node Root
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "orange";
