// Template Literals / Template Strings
const nama = "Vicky";
const umur = 33;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expressions
console.log(`${1 + 1}`);
console.log(`${alert("halo")}`);
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Vicky Galih",
  umur: 33,
  nrp: "230103100",
  email: "vickygp5571@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
