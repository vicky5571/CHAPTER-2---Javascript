var penumpang = ["Vicky", undefined, "doddy"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang.splice(i, 1, namaPenumpang);
        // penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // jika sudah ada nama yang sama
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika seluruh kursi terisi
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
