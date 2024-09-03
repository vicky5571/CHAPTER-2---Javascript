// Destructing Array
// const perkenalan = ["Halo", "nama", "saya", "Vicky Galih"];

// const [salam, satu, dua, nama] = perkenalan;

// Skipping Items
// const [salam, , , nama] = perkenalan;

// Swap Items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest Parameter

// DESTRUCTURING OBJECT
// const mhs = {
//   nama: "Vicky Galih",
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "Vicky Galih",
//   umur: 20,
// });

// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//   nama: "Vicky Galih",
//   umur: 20,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan nilai default
// const mhs = {
//   nama: "Vicky Galih",
//   umur: 20,
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// Rest Parameter
// const mhs = {
//   nama: "Vicky Galih",
//   umur: 20,
//   email: "abc@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Vicky Galih",
  umur: 20,
  email: "abc@gmail.com",
};

function getIdMhs(id) {
  return mhs.id;
}

console.log(getIdMhs(mhs));
