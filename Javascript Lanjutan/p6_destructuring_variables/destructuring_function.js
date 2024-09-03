// Destructuring

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// Case 2
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);

// Case 3
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, kurang, kali, tambah } = kalkulasi(2, 3);

// Destructuring function arguments
const mhs1 = {
  nama: "Vicky Galih",
  umur: 20,
  email: "vicky@gmail.com",
  nilai: {
    tugas: 100,
    uts: 90,
    uas: 100,
  },
};

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Saya adalah ${nama}, saya ${umur} tahun dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));
