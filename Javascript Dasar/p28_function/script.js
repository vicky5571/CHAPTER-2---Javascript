var sisi1 = 8;
var sisi2 = 3;
var volume1, volume2;
var jumlah;

function hitungVolumeKubus(sisi) {
  var volume = sisi ** 3;
  return volume;
}

function jumlahVolume(vol1, vol2) {
  jumlah = vol1 + vol2;
  return jumlah;
}

volume1 = hitungVolumeKubus(sisi1);
volume2 = hitungVolumeKubus(sisi2);

alert(jumlahVolume(volume1, volume2));
