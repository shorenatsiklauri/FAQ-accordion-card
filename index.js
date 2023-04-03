const textbox = document.querySelector(".textbox");

function toggleText(event) {
  event.target.classList.toggle("active");
  event.target.classList.toggle("bold");
}
