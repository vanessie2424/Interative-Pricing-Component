const slider = document.getElementById("myRange");
const output = document.getElementById("monthly-price");
const toggleBtn = document.getElementById("switch-toggle");
const yearlyPrice = document.getElementById("yearly-price");

output.innerHTML = slider.value;
yearlyPrice.innerHTML = slider.value * 12 * 0.25;

slider.addEventListener("input", () => {
  output.innerHTML = slider.value;
});
slider.addEventListener("input", () => {
  yearlyPrice.innerHTML = slider.value * 12 * 0.25;
});

toggleBtn.addEventListener("click", () => {
  if (output.style.display === "none") {
    output.style.display = "inline";
    yearlyPrice.style.display = "none";
  } else {
    output.style.display = "none";
    yearlyPrice.style.display = "inline";
  }
});
