"use strict";
// --- VALIDATE EMAIL ---
const emailError = document.querySelector("#email-error");
const hideErrorEmail = (isHide) =>
  isHide
    ? emailError.classList.add("d-none")
    : emailError.classList.remove("d-none");
const emailInput = document.querySelector("#email-input");

// Validate email function
const validateEmail = function () {
  const emailText = emailInput.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailText.match(regex)) {
    // Show info if the email is in correct format
    document.querySelector("#email-validation").classList.add("d-none");
    document
      .querySelector("#personal-info .section-description")
      .classList.remove("d-none");

    // Show error text
  } else {
    hideErrorEmail(0);
  }
};
document
  .querySelector("#email-validation .btn-submit")
  .addEventListener("click", validateEmail);

// Hide email error text when the input changes or when keyup
emailInput.addEventListener("change", function () {
  hideErrorEmail(1);
});
emailInput.addEventListener("keyup", function (e) {
  if (e.key !== "Enter") {
    // Hide error if it isn't Enter key
    hideErrorEmail(1);

    // Submit if it's Enter key
  } else {
    validateEmail();
  }
});

// --- VIEW MORE / VIEW LESS BUTTOn ---
const btnJobView = document.querySelectorAll("#job-info .section-button");
for (let i = 0; i < btnJobView.length; i++) {
  btnJobView[i].addEventListener("click", function () {
    const sectionDesEl = this.parentNode.querySelector(".section-description");
    sectionDesEl.classList.toggle("d-none");

    // After toggling it, check if it's hidden
    if (sectionDesEl.classList.contains("d-none")) {
      this.innerHTML = '<i class="icon-down-big"></i> VIEW MORE';
      // Make it have small height
      this.parentNode.parentNode.classList.remove("d-flex");

      // Else if the content is showed
    } else {
      this.innerHTML = '<i class="icon-up-big"></i> VIEW LESS';
      // Make it have the same height as other sections
      this.parentNode.parentNode.classList.add("d-flex");
    }
  });
}
