const password = document.getElementById("password-check");
const sections = document.querySelector(".sections");

let passwordStrength = "easy";

const changeIndicatorsTo = function(color, sect = [1, 2, 3]) {
  const sectionItems = Array.from(sections.children);

  if (typeof sect === "number") sect = [sect];

  sect.forEach((elem) => {
    sectionItems[elem - 1].style.backgroundColor = color;
  });
};

const checkPasswordStrength = function(password) {
  if (password.length < 8) return;

  const onlyLetters = /^[a-z]+$/i;
  const onlyDigits = /^[0-9]+$/;
  const onlySymbols = /^\W+$/;

  const oneType =
    onlyLetters.test(password) ||
    onlyDigits.test(password) ||
    onlySymbols.test(password);

  const lettersDigits = /^(?=.*[a-z+][0-9+]|[0-9+][a-z+])(?=.*^[a-z0-9]*$)/i;
  const lettersSymbols = /^(?=.*[a-z+][\W|_+]|[\W|_+][a-z+])(?=.*^[a-z\W|_]*$)/i;
  const symbolsDigits = /^(?=.*[0-9+][\W|_+]|[\W|_+][0-9+])(?=.*^[0-9\W|_]*$)/;

  const twoTypes =
    lettersDigits.test(password) ||
    lettersSymbols.test(password) ||
    symbolsDigits.test(password);

  if (oneType) {
    passwordStrength = "easy";
  } else if (twoTypes) {
    passwordStrength = "medium";
  } else {
    passwordStrength = "strong";
  }

  console.log(passwordStrength);
};

const swicthIndicators = function(password) {
  if (password === "") {
    changeIndicatorsTo("gray");
  } else if (password.length < 8) {
    changeIndicatorsTo("red");
  } else if (passwordStrength === "easy") {
    changeIndicatorsTo("red", 1);
    changeIndicatorsTo("gray", [2, 3]);
  } else if (passwordStrength === "medium") {
    changeIndicatorsTo("yellow", [1, 2]);
    changeIndicatorsTo("gray", 3);
  } else if (passwordStrength === "strong") {
    changeIndicatorsTo("green");
  }
};

const checkAndSwitch = function() {
  const passwordVal = password.value;
  checkPasswordStrength(passwordVal);
  swicthIndicators(passwordVal);
};

password.addEventListener("input", checkAndSwitch);
