const form = document.querySelector(".php-email-form");
const successMsg = document.querySelector("#success-msg-form");
const loadingMsg = document.querySelector("#loading-msg-form");
const errorMsg = document.querySelector("#error-msg-form");
const fillErrorMsg = document.querySelector("#fillerror-msg-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fillErrorMsg.style.display = "none";
  if (
    !form.name.value == "" &&
    !form.email.value == "" &&
    !form.subject.value == "" &&
    !form.message.value == ""
  ) {
    loadingMsg.style.display = "block";
    db.collection("contactFormData")
      .add({
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      })
      .then(() => {
        form.name.value = "";
        form.email.value = "";
        form.subject.value = "";
        form.message.value = "";
        loadingMsg.style.display = "none";
        successMsg.style.display = "block";
      })
      .catch(() => {
        successMsg.style.display = "none";
        errorMsg.style.display = "block";
      });
    setTimeout(() => {
      errorMsg.style.display = "none";
      successMsg.style.display = "none";
    }, 5000);
  } else {
    fillErrorMsg.style.display = "block";
  }
});
