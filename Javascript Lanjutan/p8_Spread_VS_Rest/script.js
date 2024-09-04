// Spread Operator
// memecah iterables menjadi single element

// const mhs = ["Vicky", "Galih", "Pamungkas"];
// console.log(...mhs);

// 1. Menggabungkan 2 array
// const mhs = ["Vicky", "Galih", "Pamungkas"];
// const dosen = ["Riwa", "John", "Xos"];
// const orang = [...mhs, "Aji", ...dosen];

// console.log(orang);

// 2. Copy array
// const mhs = ["Vicky", "Galih", "Pamungkas"];
// const mhs1 = [...mhs];
// console.log(mhs1);

const nama = document.querySelector("h1.nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

nama.innerHTML = huruf;
