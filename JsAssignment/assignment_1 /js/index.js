// Gender
const gender = document.getElementsByName("radio");
const valgender = document.getElementById("vgender");

// Interest
const checkbox = document.getElementsByClassName("checkbox");
const valInterest = document.getElementById("valInterest");

// Age
const age = document.getElementsByName("age")[0];

// DOB
const day = document.getElementsByName("day")[0];

const month = document.getElementsByName("month")[0];
const year = document.getElementsByName("year")[0];
const valDob = document.getElementById("valDob");
const allDays = document.getElementsByName("day")[0].querySelectorAll("*");


const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const btn = document.getElementById("submitForm");
const messages = document.getElementsByClassName("validate");

btn.addEventListener("click", () => {
  validate();
});

function validate() {
  document
    .querySelectorAll("input[required], textArea[required]")
    .forEach((Input) => {
      Compulsory(Input);
    });
  valRadio();
  CheckBox(checkbox, valInterest);
  Age();
  let empty = true;

  for (let i = 0; i < messages.length; i++) {
    if (messages[i].innerText !== "") {
      empty = false;
      break;
    }
  }

  if (empty == true) {
    return (btn.href = "partners_preference_form.html");
  }
};

function Compulsory(element) {
  let span = element.nextElementSibling;
  if (element.value.trim() === "") {
    return (span.innerText = "Compulsory Field");
  } else {
    return (span.innerText = "");
  }
}

function valRadio() {
  Radio(gender, valgender);
};

function Radio(element, span) {
  let value = false;
  element.forEach((gender) => {
    if (gender.checked) value = true;
  });

  if (!value) return (span.innerText = "Compulsory Field");
  else return (span.innerText = "");
}

function CheckBox(element, span) {
  let value = 0;
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) value += 1;
  }
  if (value == 0)
    return (span.innerText = "Minimum 1 value needs to be selected");
  else return (span.innerText = "");
}

function Phone(element) {
  let span = element.nextElementSibling;
  const regex = /^\d{10}$/;
  if (span.textContent === "" && !regex.test(element.value.trim()))
    return (span.innerText = "Only numbers allowed, exact 10 digits");
}

function Numbers(element) {
  let span = element.nextElementSibling;
  const regex = /^[0-9]+$/;
  if (!regex.test(element.value.trim()))
    return (span.innerText = "Only Numbers are allowed");
  else return (span.innerText = "");
}

function TextOnly(element) {
  let span = element.nextElementSibling;
  const regex = /^[A-Za-z]+$/;

  if (element.value.trim() === "") {
    return (span.innerText = "Compulsory Field");
  } else {
    if (!regex.test(element.value.trim()))
      return (span.innerText = "Numbers are not allowed");
    else return (span.innerText = "");
  }
}

function ConfirmPass(element1, element2) {
  let span = element1.nextElementSibling;
  if (
    span.textContent === "" &&
    element1.value.trim() !== element2.value.trim()
  )
    return (span.innerText = "Must be exactly same as Password");
}

function Email(element) {
  let span = element.nextElementSibling;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (span.textContent === "" && !regex.test(element.value.trim()))
    return (span.innerText = "Enter a valid email");
}

function PassValidation(element) {
  let span = element.nextElementSibling;
  const regex = /^[a-zA-Z0-9]{8,12}$/;
  if (span.textContent === "" && !regex.test(element.value.trim()))
    return (span.innerText =
      "Password should be between 8-12 alphanumeric characters and no special characters are allowed");
}

function Age() {
  let age1 = currentYear - year.value;
  if (year.value == "Year") {
    valDob.innerText = "Compulsory Field";
    age.value = "";
  } else {
    valDob.innerText = "";
    if (
      currentMonth < month.value ||
      (currentMonth === month.value && currentDay < day.value)
    ) {
      age1 -= 1;
    }
    return (age.value = age1);
  }
}

year.addEventListener("change", () => {
  Age();
});

// April, June, Sep, Nov

function dobVal (selectedmonth, selectedyear)  {
  for (let i = 0; i <= 30; i++) {
    allDays[i].disabled = false;
  }

  if (selectedyear == "Year") {
    for (let i = 0; i <= 30; i++) {
      allDays[i].disabled = true;
    }
  } else {
    switch (selectedmonth) {
      case "feb":
        if (selectedyear % 4 == 0) {
          for (let i = 28; i <= 30; i++) {
            allDays[i].disabled = true;
          }
        } else {
          for (let i = 29; i <= 30; i++) {
            allDays[i].disabled = true;
          }
        }
        break;

      case "april":
      case "june":
      case "sep":
      case "nov":
        allDays[30].disabled = true;
        break;
    }
  }
};

function Cal () {
  dobVal(month.value, year.value);
};

Cal();
