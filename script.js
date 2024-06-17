let ImageBox = document.getElementById("img-box");
let ImageQR = document.getElementById("QrImg");
let UserInput = document.getElementById("QrText");

function GenerateQR() {
  if (UserInput.value.length > 0) {
    ImageQR.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      UserInput.value;
    ImageBox.classList.add("show-img");
  } else {
    UserInput.classList.add("error");
    setTimeout(() => {
      ImageBox.classList.remove("show-img");
    }, 1000);
  }
}
