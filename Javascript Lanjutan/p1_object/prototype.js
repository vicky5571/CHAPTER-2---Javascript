// Versi Object dengan prototypal inheritance
// function Mahasiswa(nama, energy) {
//   // Yang sebenarnya terjadi di belakang layar
//   // Secara default constructor function punya parent bernama prototype
//   // let this = Object.create(Mahasiswa.prototype);
//   this.nama = nama;
//   this.energy = energy;

//   // return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return `Halo ${this.nama}, selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Halo ${this.nama}, selamat bermain`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energy += jam * 2;
//   return `Halo ${this.nama}, selamat tidur`;
// };

// let vicky = new Mahasiswa("Vicky", 10);

// Versi Class
// Ini hanyalah cara untuk membungkus prototype agar menjadi lebih masuk akal saat dibaca
// yang sebenarnya terjadi di belakang layar tetap sama seperti kode prototype sebelumnya
class Mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }
  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }

  main(jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, selamat bermain`;
  }

  tidur(jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
  }
}

let vicky = new Mahasiswa("Vicky", 10);
