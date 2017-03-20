var feedbackForm = document.querySelector(".btn-feedback");
var popupForm = document.querySelector(".popup-feedback");
var close = document.querySelector(".feedback-exit");
var overlay = document.querySelector(".popup-overlay");
var form = popupForm.querySelector("form");
var namefio = document.querySelector("[name=fio]");
var email = document.querySelector("[name=email]");
var storageN = localStorage.getItem("namefio");

feedbackForm.addEventListener("click", function(event) {
    event.preventDefault();
    popupForm.classList.add("popup-feedback-show");
    overlay.classList.add("popup-overlay-show");
    namefio.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popupForm.classList.remove("popup-feedback-show");
    overlay.classList.remove("popup-overlay-show");

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popupForm.classList.contains("popup-feedback-show")) {
            popupForm.classList.remove("popup-feedback-show");
            overlay.classList.remove("popup-overlay-show");
        }
    }
});

form.addEventListener("submit", function(event) {
  if (!namefio.value || !email.value || !text.value) {
    event.preventDefault();
    console.log("Нужно заполнить все поля");
  } else {
    localStorage.setItem("namefio", namfio.value);
    localStorage.setItem("email", email.value);
  }
});
