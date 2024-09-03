// DOM Selection
// document.getElementById() -> mengembalikan element
// sintaks penulisannya didahului dengan node rootnya yaitu document

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Vicky Galih";

// document.getElementsByTagName() -> mengembalikan HTMLCollections
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "5rem";

// document.getElementsByClassName() -> mengembalikan HTMLCollections
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "nyoba ngubah dari js";
