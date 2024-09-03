// Membuat Object
// Object Literal
var mhs1 = {
  nama: "Vicky Galih",
  nrp: "230103100",
  email: "vickygalihpamungkas@gmail.com",
  jurusan: "Teknik Informatika",
};

var mhs2 = {
  nama: "Gnavry",
  nrp: "230103101",
  email: "gnavry@gmail.com",
  jurusan: "Teknik Informatika",
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Tina", "230103102", "tina@gmail.com", "Seni Rupa");

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  // var this = {}; Anggap saja ada ini seperti pada function declaration untuk membantu pemahaman constructor
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // return this; Anggap saja ada ini seperti pada function declaration untuk membantu pemahaman constructor
}

var mhs4 = new Mahasiswa("Tabita", "230103103", "tabita@gmail.com", "Akuntansi");
