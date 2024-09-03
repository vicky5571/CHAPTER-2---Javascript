// THIS
// console.log(window);

// Membuat Object

// Cara 1 - Function Declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();
// this mengembalikan object GlobalS

// Cara 2 - Object Literal
// var obj = { a: 10, nama: "Vicky" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();
// This mengembalikan object yang bersangkutan

// Cara 3 - Constructor
function Halo() {
  console.log(this);
  console.log("halo");
}

var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
