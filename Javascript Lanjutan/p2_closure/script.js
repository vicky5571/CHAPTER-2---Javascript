// 2.1 Execution Context, Hoisting, and Scope

// console.log(nama);
// var nama = "Vicky";

// Creation phase terjadi pada konteks global
// akan mencari variable terlebih dahulu dan diisi dengan undefined
// akan mencari function terlebih dahulu dan diisi dengan fn()
// konsep ini dinamakan hoisting

// akan ada 2 object yang dibuat meskipun kode javascript kosong :
// window = global object
// this = window

// Execution phase
// console.log(sayHello);

// var nama = "Vicky";
// var umur = 33;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }
// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// selain dapat mengakses window, juga dapat mengakses arguments

// Contoh kasus 1
var nama = "Vicky Galih";
var username = "@kythvrmi";

function cetakURL(username) {
  var instragramURL = "http://instagram.com/";
  return instragramURL + username;
}

console.log(cetakURL(username));

// Contoh kasus 2
function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}
a();
