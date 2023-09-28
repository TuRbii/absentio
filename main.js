const modalToggle = document.querySelector(".modal-toggle");
const modal = document.querySelector(".modal");

// Add an event listener to the login button (label) to toggle the modal
document.querySelector(".login-button").addEventListener("click", function () {
  modalToggle.checked = !modalToggle.checked;
  modal.style.display = modalToggle.checked ? "block" : "none"; 
});

// Close the modal if the user clicks outside
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modalToggle.checked = false;
    modal.style.display = "none";
  }
});
