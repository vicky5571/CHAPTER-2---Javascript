// Method pada array
// 1. Join
var arr = ["Vicky", "Galih", "Pamungkas"];
// console.log(arr.join(" - "));

// 2. push and pop
// arr.push("gnabry");
// arr.pop();

// console.log(arr.join(" - "));

// 3. unshift and shift
// arr.unshift("gnabry");
// arr.shift();

// console.log(arr.join(" - "));

// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1. elemenBaru2, ...)
// arr.splice(2, 0, "gnabry", "Tina");
// arr.splice(1, 2, "gnabry", "Tina");
// console.log(arr.join(" - "));

// 5. Slice
// slice(indexAwal, indexAkhir);
// var arr = ["Vicky", "Galih", "Pamungkas", "gnabry", "Tina"];

// var arr2 = arr.slice(0, 3);
// console.log(arr2.join(" - "));

// 6. Foreach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Vicky", "Galih", "Pamungkas"];

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah " + e);
// });

// 7. Map
var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. Sort
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];

// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka);

// 9. Filter
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (e) {
//   return e > 5;
// });

// console.log(angka2);

// 10. Find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (e) {
  return e > 5;
});

console.log(angka2);
