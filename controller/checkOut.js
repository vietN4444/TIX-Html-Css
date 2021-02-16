const toggleCombo = () => {
  document.querySelector(".modalCheckoutCombo").classList.toggle("PEActive");
  document.querySelector("#modalCombo").classList.toggle("opacityShow");
  document
    .querySelector(".modalCheckoutCombo__container")
    .classList.toggle("translateXback");
  document.querySelector("#btnContinueSubmit").classList.toggle("d-block");
  document.querySelector("#btnContinueCombo").classList.toggle("d-block");
  document.querySelector("#txtSeat").classList.toggle("d-none");
  document.querySelector("#txtPriceCombo").classList.toggle("d-block");
};

const checkOutStepTwo = () => {
  document.querySelector(".checkoutRight").classList.toggle("d-block");
  document.querySelector(".checkoutLeft").classList.toggle("d-none");
  document.querySelector("#btnContinue").classList.toggle("d-none");
  document.querySelector("#btnContinueSubmit").classList.toggle("d-block");
  document.querySelector("#choosingChair").classList.toggle("d-none");
  document.querySelector("#methodPay").classList.toggle("d-block");
};

const addEvent = () => {
  document.getElementById("comboLabel").addEventListener("click", toggleCombo);
  document.getElementById("modalCombo").addEventListener("click", toggleCombo);
  document
    .getElementById("btnContinue")
    .addEventListener("click", checkOutStepTwo);
  document
    .getElementById("btnContinueCombo")
    .addEventListener("click", toggleCombo);
};

addEvent();
