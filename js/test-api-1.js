var imagesAll = [];
var imagesId = ["test"];
var x = [];

var botFaceData = [
  "/assets/images/bot-face-start.png",
  "/assets/images/bot-lose-face.png",
  "/assets/images/bot-win-face.png",
  "/assets/images/bot-draw-face.png",
];

const api = axios.create({
  baseURL: `http://localhost:8008/api/v1/`,
});

// window.onload = function getRequestById() {

// var q = ;

// api.get("/").then((res) => {
// console.log(res.data);
// var json = res.data;
// var datai = [];
// for (var imageUrl in json) {
//   datai.push(json[imageUrl]);
// }
// for (var imageUrl in json) {
//   x.push(json[imageUrl]);
// }
// console.log(datai);

// document.getElementById("imgId").src = datai[1];
// return res.data;
// });

// var y = { siapa: "aku", dan: "kamu" };
// var b = [];

// for (var i in y) {
//   b.push(y[i]);
// }

// console.log(x);
// console.log(y);
// console.log(b);
// document.getElementById("imageById").src = x[1];
// document.getElementById("imageById").src = b[1];
// console.log(botFaceData);

// var a, x;

var a = [];

api.get("/gameboard").then((res) => {
  // console.log(res.data);
  var b = res.data;
  var c = [];

  for (var i in b) {
    c.push(b[i]);
  }

  Object.keys(b).forEach((key) => {
    a.push(b[key]);
  });

  console.log(c);
  // Hasilnya Array : ["link1", "link2"]
  console.log(b);
  // Hasilnya Object : {"satu":"link1", "dua":"link2"}

  document.getElementById("in").src = c[0];
  //kalo di dalem src nya bisa ngambil data
});

console.log(a);
// Hasilnya Array Didalam Array, 😅
// x = a.Array[0];
document.getElementById("ex").src = a[2];
//Kalo Di luar src nya undefine, karena hasilnya array didalam array

// Bagaimana caranya mau ngambil
// data pertama yang ada
// di dalam variable c diluar fungsi ?

// Atau ngeganti array kosong (variable a) jadi
// array yang aku inginkan (bukan array didalam array 😅) ?

// Harapannya var a = ["link1", "link2"], tapi jadinya malah jadi array didalam array
