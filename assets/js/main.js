import { fetchCars } from "./api.js";
import { renderUI } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const carListElement = document.getElementById("carlist");
  //  בדיקה האם
  const searchinput = document.getElementById("searchinput");

  let allCars = [];

  if (!carListElement || !searchinput) {
    console.error("Missing DOM Element");
    return;
  }

  carListElement.innerHTML = `<div class="Loading" >Loading Cars ....</div>`;

  allCars = await fetchCars();

  if (allCars) {
    renderUI(allCars, carListElement);
  } else {
    carListElement.innerHTML =
      "<p> We sorry for the inconvineint, We are taking care of the problem .....</p>";
  }
  searchinput.addEventListener("input", (event) => {
    const searchCar = event.target.value.toLowerCase();

    const filteredCars = allCars.filter(
      (car) =>
        car.make.toLowerCase().includes(searchCar) ||
        car.model.toLowerCase().includes(searchCar)
    );
    renderUI(filteredCars, carListElement);
  });
});
