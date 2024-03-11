const slider = document.getElementById("myRange");
const output = document.getElementById("monthly-price");
const toggleBtn = document.getElementById("switch-toggle");
const yearlyPrice = document.getElementById("yearly-price");

output.innerHTML = slider.value;
yearlyPrice.innerHTML = slider.value * 12 * 0.25;

slider.addEventListener("input", () => {
  output.innerHTML = slider.value;
  const color = hsl(`${value}, 100%, 50%`);
  slider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${value}%, #f0f0f0 ${value}%, #f0f0f0 100%)`;
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
