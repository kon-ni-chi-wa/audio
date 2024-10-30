ftom = 0;
jikapr = 1;
ftganti = 0;
flag = 1;
flagg = 1;
fungsi = 0;
Bn2.innerHTML = Bn.innerHTML;
psnWA.style.display = "none";
function showDiv() {
  pesanwhatsapp = psnWA.innerHTML;
  Bn2.style.display = "none";
  Content.style = "opacity:1;margin-top:15vh;";
  ket.style = "margin-top:30px";
}
function memulai() {
  suratin.style = "transition:all 1s ease;transform:scale(.1);opacity:0";
  ket.style = "transition:all 1s ease;transform:scale(.1);opacity:0";
  setTimeout(mulaikonten, 300);
}
function mulaikonten() {
  otomatis();
  suratin.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:4vh";
  bodyblur.style = "opacity:.6;animation:none";
  wallpaper.style = "transform: scale(2);opacity:1;";
  fotoakhir.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  bq.style =
    "position:relative;opacity:1;visibility:visible;transform: scale(1);border-radius:var(--bingkai);margin-top:0";
  fungsi = 1;
  setTimeout(tombol, 500);
}

function ftmuncul() {
  if (ftganti == 0) {
    fotoakhir.style = "display:inline-flex;opacity:1;transform:scale(1)";
  }
  if (ftganti == 1) {
    fotoakhir.src = fotoakhir2.src;
    fotoakhir.style =
      "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  if (ftganti == 2) {
    fotoakhir.src = fotoakhir3.src;
    fotoakhir.style =
      "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
}
function fthilang() {
  fotoakhir.style =
    "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}
function jjfoto() {
  fotoakhir.style.animation = "rto .8s infinite alternate";
}

function tombol() {
  Tombol.style = "opacity:1;transform: scale(1);";
  Bn.style = "margin:12px 0 12px 12px";
  ftom = 1;
}
function multifungsi() {
  if (ftom == 1) {
    diterima();
  }
  if (ftom == 5) {
    menuju();
  }
}
async function menuju() {
  await swals.fire("OK!", "Kirim pesan ke WhatsApp aku, ya!", "success");
  window.location =
    "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
  Tombol.style = "margin-top:15px;opacity:1;transform: scale(1);";
}
setTimeout(showDiv, 100);

const swalst = Swal.mixin({
  timer: 2777,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 100,
});
audio = new Audio("" + linkmp3.innerHTML);
const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#FF0040",
  imageWidth: 100,
  imageHeight: 100,
});
const style = document.createElement("style");
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
today = dd + " " + monthNames[today.getMonth()] + " " + yyyy;
const body = document.querySelector("body");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  body.appendChild(heart);
}
setInterval(function name(params) {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);
