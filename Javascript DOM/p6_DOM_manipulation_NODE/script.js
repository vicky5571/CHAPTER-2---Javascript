// DOM Manipulation
// buat elemen dan node baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// Li Baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// parentNode.removeChild()
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// parentNode.replaceChild()
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Ini Paragraf 4 Baru!");

h2Baru.appendChild(teksH2Baru);
// replace child
sectionB.replaceChild(h2Baru, p4);
