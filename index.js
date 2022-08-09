const billAmount = document.querySelector("#bill_amount");
const cashGiven = document.querySelector("#cash_given");
const errorMessage = document.querySelector(".error_message");
const numNotes = document.querySelectorAll(".num_notes");
const checkButton = document.querySelector(".check_btn");

const denominations = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function clickHandler() {
  errorMessageHideHandler();
  if (billAmount.value >= 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountReturn = cashGiven.value - billAmount.value;
      numNotesReturn(amountReturn);
    } else {
      errorMessageShowHandler("Dont' Worry We Have Dishes Left To Be Cleaned");
    }
  } else {
    errorMessageShowHandler("Invalid Data Entered !");
  }
});

function errorMessageShowHandler(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

function errorMessageHideHandler() {
  errorMessage.style.display = "none";
}

function numNotesReturn(amountReturn) {
  for (let i = 0; i < denominations.length; i++) {
    const numOfNotes = Math.trunc(amountReturn / denominations[i]);
    amountReturn = amountReturn % denominations[i];
    numNotes[i].innerText = numOfNotes;
  }
}
