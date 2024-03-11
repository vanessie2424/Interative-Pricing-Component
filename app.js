const slider = document.getElementById("myRange");
const output = document.getElementById("monthly-price");
const toggleBtn = document.getElementById("switch-toggle");
const yearlyPrice = document.getElementById("yearly-price");

output.innerHTML = slider.value;
console.log(slider.value);

slider.addEventListener("input", () => {
  output.innerHTML = slider.value;
});
slider.addEventListener("input", () => {
  yearlyPrice.innerHTML = slider.value * 12 * 0.25;
});

toggleBtn.addEventListener("click", () => {
  if (yearlyPrice.style.display === "none") {
    yearlyPrice.style.display = "inline";
    output.style.display = "none";
  } else {
    yearlyPrice.style.display = "none";
    output.style.display = "inline";
  }
});
