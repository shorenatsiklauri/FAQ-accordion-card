const textbox = document.querySelectorAll(".textbox");
const svg = document.querySelectorAll(".textbox svg");
const showtext = document.querySelectorAll(".showtext");

function toggleText(index) {
  const textDisplay = showtext[index].style.display;
  if (textDisplay === "block") {
    textbox[index].classList.remove("bold");
    showtext[index].style.display = "none";
    svg[index].style.transform = "rotate(0deg)";
  } else {
    textbox[index].classList.add("bold");
    showtext[index].style.display = "block";
    svg[index].style.transform = "rotate(180deg)";
  }
}
