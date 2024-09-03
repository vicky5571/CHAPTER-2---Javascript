// 1.
// function init() {
//   let nama = "Vicky";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// 2.
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Vicky");
// panggilNama("Galih");

// 3.
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatSore = ucapkanSalam("Sore");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Vicky");

// 4.
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
