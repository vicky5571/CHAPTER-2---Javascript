// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 200) {
//     if (xhr.status === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://wwSw.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

// fetch
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah
// event yang asynchronus di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolves / reject / finally)
//  aksi (then / catch) Jika janji terpenuhi then, jika tidak catch

// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji");
//   }
// });

// janji1.then((response) => console.log("OK! : " + response)).catch((response) => console.log("NOT OK! : " + response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });
// console.log("mulai");
// console.log(janji2.finally((response) => console.log("Selesai menunggu.")).then(() => console.log(janji2)));

// console.log("selesai");

// Promise.all()
