const openPopupButtons = document.querySelectorAll("[data-open-target]");
const closePopupButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.openTarget);
    openPopup(popup);
  });
});
closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
//Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
//SHow prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
//Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
//Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
//Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

("use strict");

fetch("./xbox.json")
  .then(function (resp) {
    return resp.json();
  })

  .then(function (xbox) {
    document.getElementById("product").innerHTML = xbox.product.name;
    document.getElementById("product_sizeU").innerHTML =
      xbox.sizes.items.U.name;
    document.getElementById("product_sizeV").innerHTML =
      xbox.sizes.items.V.name;
    document.getElementById("product_sizeW").innerHTML =
      xbox.sizes.items.W.name;
    let colorArray = [
      xbox.multiversions[0].items["1-1"].values["61"].name,
      xbox.multiversions[0].items["1-2"].values["60"].name,
      xbox.multiversions[0].items["1-3"].values["59"].name,
    ];

    let colorOptions = document.getElementById("product_colour");
    colorOptions.innerHTML = "<option value=''> </option>";

    for (let i = 0; i < colorArray.length; i++) {
      const option = document.createElement("option");
      option.innerHTML = colorArray[i];
      colorOptions.appendChild(option);
    }
  });

//funkcje zmiany ceny i dostępności po wyborze rozmiaru
let price = document.getElementById("price");
let status = document.getElementById("status");
let iconStatus = document.getElementById("icon_status");
let sendInfo = document.getElementById("send_info");

let sizeU = document.getElementById("product_sizeU");
sizeU.addEventListener("click", sizeUHandleClick);
function sizeUHandleClick() {
  fetch("./xbox.json")
    .then(function (resp) {
      return resp.json();
    })

    .then(function (xbox) {
      price.innerHTML = xbox.sizes.items.U.price + ",00" + " zł";
      if (xbox.sizes.items.U.status === "Produkt dostępny") {
        status.innerHTML = xbox.sizes.items.U.status;
        iconStatus.innerHTML =
          "<img src='check.svg' alt='check' class='check' />";
        sendInfo.innerHTML =
          "<img src='time.svg'alt='time' class='time'/><div class='container_content-send'><p>Możemy wysłac już dzisiaj</p><p class='container_content-blue'>Sprawdź czas i koszty wysyłki</p></div> ";
        let numberAdd = document.querySelector(".up-number_button");
        let numberSub = document.querySelector(".down-number_button");
        var x = 0;
        let counter;
        counter = document.getElementById("quantity");
        counter.innerHTML = 1;
        numberAdd.addEventListener("click", addNumber);
        function addNumber() {
          if (x < xbox.sizes.items.U.amount + 1) {
            counter.innerHTML = x;
          }
          x++;
          return x;
        }

        numberSub.addEventListener("click", subNumber);
        function subNumber() {
          if (x > 0 && x < xbox.sizes.items.U.amount + 1) {
            counter.innerHTML = x;
          }
          x--;
          return x;
        }
      } else {
        iconStatus.innerHTML =
          "<img src='no_icon.svg' alt='no' class='check' />";
        status.innerHTML = "Produkt niedostępny";
        sendInfo.innerHTML =
          "<img src='time.svg'alt='time' class='time'/><div class='container_content-send'><p>Dostawa niebawem</p><p>Wybierz inny rozmiar</p>";
        counter = document.getElementById("quantity");
        counter.innerHTML = 0;
      }
    });
}

let sizeV = document.getElementById("product_sizeV");
sizeV.addEventListener("click", sizeVHandleClick);
function sizeVHandleClick() {
  fetch("./xbox.json")
    .then(function (resp) {
      return resp.json();
    })

    .then(function (xbox) {
      price.innerHTML = xbox.sizes.items.V.price + ",00" + " zł";
      if (xbox.sizes.items.V.status === "Produkt dostępny") {
        status.innerHTML = xbox.sizes.items.V.status;
        iconStatus.innerHTML =
          "<img src='check.svg' alt='check' class='check' />";
        sendInfo.innerHTML =
          "<img src='time.svg'alt='time' class='time'/><div class='container_content-send'><p>Możemy wysłac już dzisiaj</p><p class='container_content-blue'>Sprawdź czas i koszty wysyłki</p></div> ";

        let numberAdd = document.querySelector(".up-number_button");
        let numberSub = document.querySelector(".down-number_button");
        let x = 0;
        let counter;
        counter = document.getElementById("quantity");
        counter.value = 1;
        numberAdd.addEventListener("click", addNumber);
        function addNumber() {
          if (x < xbox.sizes.items.V.amount + 1) {
            counter.innerHTML = x;
          }
          x++;
          return x;
        }

        numberSub.addEventListener("click", subNumber);
        function subNumber() {
          if (x > 0 && x < xbox.sizes.items.V.amount + 1) {
            counter.innerHTML = x;
          }
          x--;
          return x;
        }
      } else {
        iconStatus.innerHTML =
          "<img src='no_icon.svg' alt='no' class='check' />";
        status.innerHTML = "Produkt niedostępny";
        sendInfo.innerHTML =
          "<img src='time.svg'alt='time' class='time'/><div class='container_content-send'><p>Dostawa niebawem</p><p>Wybierz inny rozmiar</p>";
        counter = document.getElementById("quantity");
        counter.innerHTML = 0;
      }
    });
}

let sizeW = document.getElementById("product_sizeW");
sizeW.addEventListener("click", sizeWHandleClick);

function sizeWHandleClick() {
  fetch("./xbox.json")
    .then(function (resp) {
      return resp.json();
    })

    .then(function (xbox) {
      price.innerHTML = xbox.sizes.items.W.price + ",00" + " zł";
      if (xbox.sizes.items.W.status === "Produkt dostępny") {
        status.innerHTML = xbox.sizes.items.W.status;
        iconStatus.innerHTML =
          "<img src='check.svg' alt='check' class='check' />";
        sendInfo.innerHTML =
          "<img src='time.svg'alt='time' class='time'/><div class='container_content-send'><p>Możemy wysłac już dzisiaj</p><p class='container_content-blue'>Sprawdź czas i koszty wysyłki</p></div> ";

        let numberAdd = document.querySelector(".up-number_button");
        let numberSub = document.querySelector(".down-number_button");
        var x = 0;
        let counter;
        counter = document.getElementById("quantity");
        counter.innerHTML = 1;
        numberAdd.addEventListener("click", addNumber);
        function addNumber() {
          if (x < xbox.sizes.items.W.amount + 1) {
            counter.innerHTML = x;
          }
          x++;
          return x;
        }
        numberSub.addEventListener("click", subNumber);
        function subNumber() {
          if (x > 0 && x < xbox.sizes.items.W.amount + 1) {
            counter.innerHTML = x;
          }
          x--;
          return x;
        }
      } else {
        iconStatus.innerHTML =
          "<img src='no_icon.svg' alt='no' class='check' />";
        status.innerHTML = "Produkt niedostępny";
        sendInfo.innerHTML =
          "<img src='time.svg'alt='time' class='time'/><div class='container_content-send'><p>Dostawa niebawem</p><p>Wybierz inny rozmiar</p>";
        counter = document.getElementById("quantity");
        counter.innerHTML = 0;
      }
    });
}
//funkcje zmiany koloru ramki po wyborze rozmiaru
sizeU.addEventListener("click", changeBorderU);
sizeV.addEventListener("click", changeBorderV);
sizeW.addEventListener("click", changeBorderW);

function changeBorderU() {
  if ((borderColorSetting = "#c3c7c8")) {
    sizeU.style.borderColor = "#0090f6";
    sizeV.style.borderColor = "#c3c7c8";
    sizeW.style.borderColor = "#c3c7c8";
  }
}

function changeBorderV() {
  if ((borderColorSetting = "#c3c7c8")) {
    sizeV.style.borderColor = "#0090f6";
    sizeU.style.borderColor = "#c3c7c8";
    sizeW.style.borderColor = "#c3c7c8";
  }
}
function changeBorderW() {
  if ((borderColorSetting = "#c3c7c8")) {
    sizeW.style.borderColor = "#0090f6";
    sizeV.style.borderColor = "#c3c7c8";
    sizeU.style.borderColor = "#c3c7c8";
  }
}
