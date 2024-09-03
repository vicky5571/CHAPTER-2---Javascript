// Function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Vicky"));

// Arrow Function
// 1 Parameter
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Vicky"));

// 1 baris kode return saja
// const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

// console.log(tampilNama("Vicky", "Pagi"));

// Tanpa parameter
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ["Vicky", "Galih", "Pamungkas"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function
// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Vicky";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const vicky = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = "Vicky";
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const vicky = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
