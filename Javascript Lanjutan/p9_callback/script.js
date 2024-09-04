// Callback
// Synchronus Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// Asynchronus Callback
// Membuat function yang akan merequest data menggunakan AJAX
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");
