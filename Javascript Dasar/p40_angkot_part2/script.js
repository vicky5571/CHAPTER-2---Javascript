var penumpang = [];
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

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan
    // tidak mungkin ada penumpang turun
    console.log("Angkot sedang kosong, tidak mungkin ada penumpang turun.");
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // telusuri seluruh kursi dari awal
      // jika nama penumpang sesuai
      if (namaPenumpang == penumpang[i]) {
        // hapus penumpang dengan mengubah namanya menjadi undefined
        penumpang[i] = undefined;
        console.log(namaPenumpang + " telah turun.");
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada nama yang sesuai
        // tampilkan pesan kesalahannya
        console.log("Tidak ada penumpang dengan nama " + namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
