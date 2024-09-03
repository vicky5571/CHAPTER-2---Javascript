// 1. HTML Fragments
// const mhs = {
//   nama: "Vicky Galih",
//   umur: 33,
//   nrp: "230103100",
//   email: "vickygp5571@gmail.com",
// };

// const el = `<div class="mhs">
//       <h2>${mhs.nama}</h2>
//       <span class="nrp">${mhs.nrp}</span>
//   </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Vicky Galih",
//     email: "vickygp5571@gmail.com",
//   },
//   {
//     nama: "Tabita",
//     email: "tabita@gmail.com",
//   },
//   {
//     nama: "Tina",
//     email: "tina@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
//     <li>$${m.nama}</li>
//     <li>$${m.email}</li>
// </ul>`
//   )
//   .join("")}
//     </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//   judul: "Magnetic",
//   penyanyi: "illit",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// 4. Nested
// HTML Fragments Bersarang
const mhs = {
  nama: "Vicky Galih",
  semester: 5,
  mataKuliah: ["Rekayasa Web", "Analisis dan Perancangan Sistem Informasi", "Pemrograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>S
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;
