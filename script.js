const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "styledark.css";
  link.setAttribute("href", dark ? "stylelight.css" : "styledark.css");
  if (dark) {
    button.textContent = "Dark mode";
  } else {
    button.textContent = "Light mode";
  }
});
