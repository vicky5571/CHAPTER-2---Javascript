// Rest Parameter

// function myFunc(...myArgs) {
//   return myArgs;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   //   let total = 0;
//   //   for (const a of angka) {
//   //     total += a;
//   //   }
//   //   return total;
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array Destructuring
// const kelompok1 = ["Vicky", "Adel", "Doni", "Keena", "Jieun"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// Object Destructuring
// const team = {
//   pm: "Vicky",
//   frontEnd1: "Amel",
//   frontEnd2: "Adel",
//   backEnd: "Yan",
//   ux: "Fachri",
//   devOps: "Galeh",
// };

// const { pm, ...myTeam } = team;
// console.log(pm);
// console.log(myTeam);

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "Xans", false, 10, true, "Doji"));
