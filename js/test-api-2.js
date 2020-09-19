var imagesAll = [];
var imagesId = ["test"];
var x = [];
var botFaceData = [
  "/assets/images/bot-face-start.png",
  "/assets/images/bot-lose-face.png",
  "/assets/images/bot-win-face.png",
  "/assets/images/bot-draw-face.png",
];
// document
//   .getElementById("getResultAll")
//   .addEventListener("load", getRequestAllData());

// function getRequestAllData() {
//   var resultElement = document.getElementById("getResultAll");
//   resultElement.innerHTML = "";

//   axios
//     .get("https://bakergun-backend.herokuapp.com/api/v1/gameboard")
//     .then(function (response) {
//       resultElement.innerHTML = generateSuccessHTMLOutput(response);
//       console.log(response.data);
//       imagesAll.push(response.data);
//     })
//     .catch(function (error) {
//       resultElement.innerHTML = generateErrorHTMLOutput(error);
//     });
// }

// var a = document
//   .getElementById("getResultById")
//   .addEventListener("load", getRequestById());

window.addEventListener("load", getRequestById());

function getRequestById() {
  // var resultElement = document.getElementById("getResultById");
  // var theId = document.getElementById("getResultById").value;
  // resultElement.innerHTML = "";

  const api = axios.create({
    baseURL: `http://localhost:8008/api/v1/hand`,
    // baseURL: `http://localhost:8008/api/v1/gameboard`,
  });

  api.get("/").then((res) => {
    console.log(res.data);
    // document.getElementById("imageById").src = res.data.imageUrl;
    var json = res.data;

    var datai = [];

    for (var imageUrl in json) {
      datai.push(json[imageUrl]);
    }

    console.log(datai);
    document.getElementById("imageById").src = datai[2];
  });

  // axios
  // .get("https://bakergun-backend.herokuapp.com/api/v1/gameboard/id")
  // .get("http://localhost:8008/api/v1/gameboard/1")
  // .then(function (response) {
  //   console.log(response.data.imageUrl);
  // imagesId.push(response.data.imageUrl);
  // document.getElementById("imageById").src = response.data.imageUrl;
  // resultElement.innerHTML = generateSuccessHTMLOutput(response);
  // });
  // .catch(function (error) {
  //   resultElement.innerHTML = generateErrorHTMLOutput(error);
  // });
}

// function generateSuccessHTMLOutput(response) {
//   return JSON.stringify(response.data, null, "\t") + "</pre>";
// }

// function generateErrorHTMLOutput(error) {
//   return error.message;
// }

// console.log(imagesAll);
// console.log(imagesId);
// console.log(res.data.imageUrl);
console.log(x);
console.log(botFaceData);

// var images = [];

// function getRequestAllData() {
//   var resultElement = document.getElementById("getResultAll");
//   resultElement.innerHTML = "";

//   axios
//     .get("https://bakergun-backend.herokuapp.com/api/v1/gameboard")
//     .then(function (response) {
//       return JSON.stringify(response.data, null, "\t") + "</pre>";
//     })
//     .catch(function (error) {
//       return error.message;
//     });
// }
