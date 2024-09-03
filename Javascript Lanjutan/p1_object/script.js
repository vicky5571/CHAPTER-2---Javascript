// Cara untuk membuat object pada javascript
// 1. Object Literal
// PROBLEM : Tidak efektif untuk objek yang banyak
// let mahasiswa = {
//   nama: "Sandhika",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// PROBLEM : perlu menulis method baru sehingga penggunaan memori tidak efektif
function Mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;

  mahasiswa.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };

  mahasiswa.main = function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };

  mahasiswa.tidur = function (jam) {
    this.energy += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur`);
  };

  return mahasiswa;
}

// let vicky = Mahasiswa("Vicky", 10);
// let galih = Mahasiswa("Galih", 20);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };

  this.main = function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };
}

// let vicky = new Mahasiswa("Vicky", 10);

// 4. Object.create
const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },

  main: function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  },

  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur`);
  },
};

function Mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;

  return mahasiswa;
}

let vicky = Mahasiswa("Vicky", 10);
let galih = Mahasiswa("Galih", 20);
